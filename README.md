# 나만의 AI 뉴스레터 만들기 워크숍 (60분 미니 실습)

우아한형제들 사내 워크숍(비개발자 대상, 60분, 라이브 시연 + 전원 따라하기). 코딩 없이 Claude Cowork에게 말로 시켜 나만의 AI 뉴스레터를 만든다. 복잡도가 올라가는 3단계: 첫 호를 아티팩트로 만들어 내 메일로(15분) → 내 GitHub 저장소에 쌓고 Pages로 보기(30분) → 응용 셋 미리보기(10분). 실습 재료는 [ai-newsletter-template](https://github.com/imakerjun/ai-newsletter-template). 직전 Input·Process편은 `archive/v1-input-process` 브랜치에 보관.

## 구성

| 페이지 | 참가자 | 내용 |
|---|---|---|
| 홈 | 👀 | 사전 공지 링크. 왜 + 결과부터 + 준비물 4개 + 시간표 + 용어 6개 |
| 1. 첫 호를 내 이메일로 | ✋ | Gmail 커넥터 → 관심사 3탭 → 템플릿 형식 아티팩트 → 하나 고치기 → 공유 링크 이메일 → 휴대폰 확인 |
| 2. 내 저장소에 쌓기 | ✋ | Use this template → Pages 켜기(첫 성공) → GitHub 커넥터 → 내 설정 → 1호 발행(둘째 성공) → 08:00 예약 |
| 3. 응용 | 👀 | 공식문서 깊이 읽기 · 나만의 신문 · 주간 브리핑, 프롬프트만 |
| 참고자료 | | 템플릿·샘플 · GitHub 공식 문서 · 동·서 이론 출처 |

페이지마다 첫 줄에 👀(보기만) / ✋(같이 하기) Callout을 둔다. 실습 페이지는 스텝마다 "이렇게 보이면 성공" Callout과 맨 아래 "막혔을 때" 표가 있다. 비개발자가 "지금 내가 뭘 해야 하는지"를 잃지 않게 하는 장치.

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
