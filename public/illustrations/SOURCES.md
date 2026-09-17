# 일러스트 출처 및 제작 기록

## rocket-goal.png

- 용도: 홈의 ‘오늘의 목표’ 콜아웃 아이콘, 32 × 32 CSS px
- source: 이라스토야 원본 · ロケットのイラスト
- 원문: https://www.irasutoya.com/2013/07/blog-post_30.html
- 로컬 원본: `projects/yesjunok/japan-images/images/宇宙/ロケットのイラスト.png`
- 실제 파일: 592 × 586, RGBA PNG. 완전 투명 59.74%, 부분 alpha 1.24%.
- 수정 없이 복사. 기존 `rocket.png`와 다른 페이지의 사용처는 보존.

## curation-custom-v1.png

- 용도: 홈의 ‘큐레이션 결과물’ 카드
- source: custom · 내장 image_gen으로 생성 후 같은 도구로 편집
- 그림체: 기존 깊이 읽기 아이콘과 어울리는 종이·과슈 질감의 기사 카드 세 장과 체크 표시
- 참조: 첫 생성은 참조 이미지 없음. 편집에는 첫 생성 이미지를 사용.
- 실제 파일: 1254 × 1254, RGBA PNG
- 투명도 검사: alpha 0–255, 완전 투명 55.16%, 부분 alpha 44.81%, 완전 불투명 0.03%
- 최종 원본: `exec-5273c0fa-6713-4eed-a55d-7f3595958ae6.png`

### 생성 프롬프트

Use case: illustration-story. Asset type: educational workshop website card illustration, displayed at 96px square. Draw a single compact illustration showing CURATION: three small paper article cards fanned slightly behind one main selected card, the front card marked with one large muted teal check mark, a few short gray page lines only. No letters or readable words. The three cards should have one small colored header/tab each, blue, muted amber, and sage. Irasutoya-inspired warm Japanese educational clipart, simple plump rounded forms, softly textured paper and gouache/crayon, minimal details, no thick black outlines, no people, no magnifying glass. Matching companion icons of an open book and a person reading newspaper. Centered square composition, full silhouette within frame, subject occupies 82% of canvas width. CRITICAL actual transparent-background PNG alpha channel. Every pixel outside the paper cards must be transparent, no white rectangle, no checkerboard drawn in, no floor, no cast shadow, no surrounding decoration.

### 편집 프롬프트

Edit this illustration. REMOVE the small open book at lower left completely. REMOVE the person and newspaper at lower right completely. Keep ONLY the three overlapping article cards and the large teal check mark on the front card. Fill in the front card naturally where those removed objects covered it, with a clean simple paper edge. Preserve the existing cards' colors, paper/crayon texture, rounded shapes and teal checkmark exactly. Recenter the remaining three-card composition in a square canvas with 8-10% transparent margin around its complete silhouette. Actual transparent PNG alpha background, not white, no drawn checkerboard, no shadow. No person, no book, no newspaper, no extra objects.

## deep-reading-custom-v1.png

- 용도: 홈의 ‘깊이 읽기 결과물’ 카드
- source: custom · 내장 image_gen으로 생성한 새 일러스트
- 그림체: 둥글고 단순한 교육용 클립아트, 부드러운 종이·과슈 질감
- 참조: 기존 카드 일러스트의 질감과 작은 표시 크기를 확인해 프롬프트에 반영. 입력 참조 이미지 없음.
- 실제 파일: 1254 × 1254, RGBA PNG
- 투명도 검사: alpha 0–255, 완전 투명 48.14%, 부분 alpha 51.81%, 완전 불투명 0.05%
- 기존 `books.png`는 다른 페이지에서 계속 사용하므로 보존.

### 생성 프롬프트

Use case: illustration-story. Asset type: small educational workshop website card illustration displayed at 96px square. Create ONE new isolated illustration of a chunky open book with a large magnifying glass looking closely at one page: clear visual metaphor for deep reading and understanding a document. Irasutoya-inspired warm Japanese educational clipart: simple plump rounded forms, soft paper/crayon/gouache texture, no thick black outlines, muted teal-blue book cover, warm ivory pages, dark desaturated teal magnifier rim, a little muted amber bookmark. Single strong compact silhouette, book and magnifying glass overlap naturally; very few large page strokes, no readable text. Centered square composition, subject takes about 85% of width, all edges fully inside frame, generous clean edges. CRITICAL: export actual transparent-background PNG with alpha channel, entire area outside the objects must be fully transparent. No white rectangle, no background scene, no ground plane, no drop shadow, no checkerboard pattern drawn into image. No people, no sparkles, no extra objects, no branding. This must remain legible and feel like a warm original hand-drawn illustration at 96x96 CSS pixels.
