#!/bin/bash
# Markdown 강조(**bold**) 패턴 중 한국어 환경에서 깨지기 쉬운 케이스를 찾는다.
#
# 위험 패턴: 닫는 구두점(`)`, `"`, `'`) 직후에 `**` 가 오고, 그 다음에 한글이 바로 붙는 경우.
# 이런 패턴은 CommonMark의 punctuation flanking 규칙으로 인해 일부 파서에서
# `**` 를 닫는 emphasis로 인식하지 못해 그대로 출력된다.
#
# 안전한 작성 방식:
#   ❌ **하네스(harness)**입니다
#   ✅ **하네스(harness)** 입니다       (공백 추가)
#   ✅ **하네스 (harness)** 입니다      (괄호 앞 공백)
#
# Usage: ./scripts/check-korean-bold.sh
# 종료 코드: 위험 패턴 발견 시 1, 없으면 0

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGET="$ROOT/content"

# 위험 패턴: [닫는 구두점] + ** + [한글]
PATTERN='[)""'"'"'][*][*][가-힣]'

echo "🔍 한글 강조 깨짐 패턴 검사: $TARGET"

if grep -rn -E "$PATTERN" "$TARGET" 2>/dev/null; then
  echo ""
  echo "❌ 위 위치에서 닫는 구두점 직후 ** + 한글 패턴이 발견되었습니다."
  echo "   해결: ** 와 한글 사이에 공백을 추가하세요."
  echo "   예: **단어(word)** 입니다  (← 공백 1칸)"
  exit 1
fi

echo "✅ 위험 패턴 없음."
exit 0
