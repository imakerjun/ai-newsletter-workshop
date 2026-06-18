#!/usr/bin/env bash
# Claude Code PostToolUse hook — 컨벤션 검사기 (여러 룰)
#
# 룰 1: 이탤릭(*...*) 금지. 강조는 볼드(**...**), 인용은 따옴표.
# 룰 2: 본문/Card meta 안 시간 슬롯 금지 (H1 회차 헤더 시간은 예외).
#       라이브 시간은 유동적이라 슬롯별 시간을 본문에 박지 않는다.
#
# 한 룰이라도 위반 시 exit 2로 차단 + stderr로 위치/줄 안내.

set -u

INPUT="$(cat 2>/dev/null || true)"
FILE_PATH="$(printf '%s' "$INPUT" | /usr/bin/python3 -c '
import json, sys
try:
    d = json.loads(sys.stdin.read())
    print(d.get("tool_input", {}).get("file_path", ""))
except Exception:
    print("")
' 2>/dev/null)"

[[ -z "$FILE_PATH" ]] && exit 0
case "$FILE_PATH" in
  *.mdx) ;;
  *) exit 0 ;;
esac
[[ ! -f "$FILE_PATH" ]] && exit 0

VIOLATIONS=""

# 룰 1 — 이탤릭(*X*) 금지
ITALIC="$(perl -ne '
  while (/(?<!\*)\*([^*\s][^*]*?[^*\s]|[^*\s])\*(?!\*)/g) {
    print "  L$.: *$1*\n"
  }
' "$FILE_PATH" 2>/dev/null)"

if [[ -n "$ITALIC" ]]; then
  VIOLATIONS+=$'\n[룰] 이탤릭(*...*) 금지. 강조는 **볼드**, 인용은 "따옴표"로.\n'
  VIOLATIONS+="$ITALIC"
fi

# 룰 2 — 본문/Card meta 안 시간 슬롯 금지 (H1 라인 예외)
TIME="$(perl -ne '
  next if /^# /;  # H1: 회차 전체 시간(예: 19:30〜21:30)은 OK
  if (/(\([0-9]{1,2}:[0-9]{2}[^)]*\))/) {
    print "  L$.(괄호): $1\n"
  }
  if (/(meta="[^"]*?[0-9]{1,2}:[0-9]{2}[^"]*")/) {
    print "  L$.(meta): $1\n"
  }
' "$FILE_PATH" 2>/dev/null)"

if [[ -n "$TIME" ]]; then
  VIOLATIONS+=$'\n[룰] 본문/Card meta 안 시간 슬롯 금지. 라이브 시간은 유동적이라 회차 전체(H1)에만 표기.\n'
  VIOLATIONS+="$TIME"
fi

if [[ -n "$VIOLATIONS" ]]; then
  REL="${FILE_PATH#$PWD/}"
  {
    printf '[convention] %s\n' "$REL"
    printf '%s\n' "$VIOLATIONS"
  } >&2
  exit 2
fi

exit 0
