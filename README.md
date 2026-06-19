# AI 뉴스레터 워크숍 (Input·Process편)

우아한형제들 사내 번개. 학습 에이전트를 input·process·output으로 보고, input을 잘 넣는 두 동작(여러 관점 재방문 / 하나의 하이라이트)을 라이브로 시연한다. 직전 [Output편 워크숍](https://ai-learning-agent-workshop.vercel.app/)의 짝꿍.

## 구성

| 페이지 | 내용 |
|---|---|
| 홈 | 왜 이번엔 input인가 + 오늘의 목표 |
| 1. 학습 에이전트 | input·process·output + 동·서 이론 근거 |
| 2. 재방문 (INPUT) | 같은 문서를 여러 관점으로 다시 읽기 |
| 3. 시연 ① | 한 글을 4개 렌즈로 재방문 (프롬프트) |
| 4. 하이라이트 (PROCESS) | 네 덩이 중 하나만 남기기 |
| 5. 시연 ② | 하이라이트 → 뉴스레터 한 꼭지 |
| 6. 이후 시도 | 본인 문서로 / 주 1회 / Output편 연결 |
| 참고자료 | 동·서 학술 출처 + 소스 글 |

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
