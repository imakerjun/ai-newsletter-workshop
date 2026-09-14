# AI 뉴스레터 워크숍 (Input·Process편)

우아한형제들 사내 번개(비개발자 대상, 원데이). 코딩 없이 Claude Cowork로 나만의 AI 학습 허브를 만든다. 학습 에이전트를 input·process·output으로 보고, 깊이 읽기(input)·큐레이션(process)을 라이브로 시연한 뒤 참가자가 본인 뉴스레터를 만들어 Vercel에 올리고 스케줄을 건다. 직전 [Output편 워크숍](https://ai-learning-agent-workshop.vercel.app/)의 짝꿍.

## 구성

| 페이지 | 참가자 | 내용 |
|---|---|---|
| 홈 | 👀 | 왜 학습 허브인가 + 준비물 3개 + 오늘의 흐름 + 용어 6개 |
| 1. 학습 에이전트 | 👀 | input·process·output + 동·서 이론 근거 |
| 2. 깊이 읽기 (INPUT) | 👀 | 같은 문서를 여러 렌즈로 다시 읽기 |
| 3. 시연 ① | 👀 | 공식문서 링크 하나 → 5렌즈 문서 (프롬프트) |
| 4. 큐레이션 (PROCESS) | 👀 | 다 담지 않고 핵심 하나 + 선정 기준 다섯 |
| 5. 시연 ② | 👀 | 관심사 바꾸기 → 뉴스레터 한 호 발행 → Vercel |
| 6. 시작하기 | ✋ | 따라하기 3단계(미리보기 → Vercel 배포 → 스케줄) + 성공 확인 + 막혔을 때 |
| 참고자료 | | 동·서 학술 출처 + 템플릿·소스 글 |

페이지마다 첫 줄에 👀(보기만) / ✋(같이 하기) Callout을 둔다. 비개발자가 "지금 내가 뭘 해야 하는지" 잃지 않게 하는 장치.

## 로컬 개발

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # 빌드 + pagefind 검색 색인
npm run check:md  # 한글 볼드 깨짐 린트
```

## 기술 스택

- [Nextra 4.5](https://nextra.site/) · Next.js 15 · React 19
- [Pretendard Variable](https://github.com/orioncactus/pretendard) — Korean web font
- 톤 가이드는 [STYLE.md](STYLE.md) 참고 (메이커준 톤)

## 라이선스

- 디자인 베이스는 직전 워크숍 사이트(Folio 디자인 시스템 라이트 커스터마이즈)에서 승계
- Pretendard 폰트 OFL-1.1
