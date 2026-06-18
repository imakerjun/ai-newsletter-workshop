#!/usr/bin/env bash
# Claude Code PostToolUse hook helper
# stdin: JSON with tool_input (Write/Edit). 변경된 파일이 content/*.mdx 또는
# components/*.{tsx,css}, app/globals.css 등 페이지 렌더에 영향을 주면 dev 서버를
# 짧게 ping해서 라우트가 정상인지 확인한다.
#
# - 영향 없는 파일이면 조용히 종료(exit 0).
# - dev 서버가 응답 안 하면 안내만 출력(exit 0) — Claude를 block하지 않는다.
# - 변경된 MDX의 라우트가 5xx이면 stderr로 에러 한 줄을 노출해 Claude가 다음 액션에서 참고.

set -u

PORT="${LEARNING_AGENT_PORT:-3001}"
BASE="http://localhost:${PORT}"
INPUT="$(cat 2>/dev/null || true)"

# tool input 파싱: file_path 추출
FILE_PATH="$(printf '%s' "$INPUT" | /usr/bin/python3 -c '
import json, sys
try:
    d = json.loads(sys.stdin.read())
    print(d.get("tool_input", {}).get("file_path", ""))
except Exception:
    print("")
' 2>/dev/null)"

[[ -z "$FILE_PATH" ]] && exit 0

# 페이지 렌더에 영향을 주는 파일만 처리
case "$FILE_PATH" in
  */content/*.mdx) ;;
  */content/*/_meta.ts) ;;
  */components/*.tsx|*/components/*.css|*/components/*.module.css) ;;
  */app/*.tsx|*/app/*.css) ;;
  */mdx-components.tsx|*/next.config.mjs) ;;
  *) exit 0 ;;
esac

# dev 서버 ping (1초 안에 응답 없으면 조용히 종료)
if ! curl -s -o /dev/null --max-time 1 "$BASE/" 2>/dev/null; then
  printf '[page-check] dev 서버(%s) 응답 없음 — 체크 스킵\n' "$BASE" >&2
  exit 0
fi

# 변경된 파일에서 라우트 추론
ROUTE=""
case "$FILE_PATH" in
  */content/*.mdx)
    REL="${FILE_PATH#*/content/}"
    REL="${REL%.mdx}"
    REL="${REL%/index}"
    [[ -z "$REL" || "$REL" == "index" ]] && ROUTE="/" || ROUTE="/${REL}"
    ;;
  */content/*/_meta.ts)
    REL="${FILE_PATH#*/content/}"
    REL="${REL%/_meta.ts}"
    ROUTE="/${REL}"
    ;;
  *)
    # 컴포넌트·전역 CSS 변경은 모든 페이지에 영향 → 루트만 체크
    ROUTE="/"
    ;;
esac

# 짧게 대기(HMR 재컴파일 여유)
sleep 1

CODE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 "${BASE}${ROUTE}" 2>/dev/null)"

if [[ "$CODE" == "200" ]]; then
  printf '[page-check] %s ✓ 200\n' "$ROUTE"
elif [[ "$CODE" == "500" ]]; then
  # 5xx는 stderr로 — Claude가 다음 응답에서 즉시 진단할 수 있도록
  printf '[page-check] %s ✗ %s — MDX/컴포넌트 빌드 에러. curl %s%s 로 원문 확인.\n' \
    "$ROUTE" "$CODE" "$BASE" "$ROUTE" >&2
  exit 0
else
  printf '[page-check] %s · %s\n' "$ROUTE" "$CODE"
fi
