import styles from './NewsletterExample.module.css'

export function NewsletterExample() {
  return (
    <section id="newsletter-example" className={styles.example} aria-labelledby="newsletter-example-title">
      <header className={styles.header}>
        <span className={styles.eyebrow}>학습 자료 뉴스레터 · 프롬프트 편</span>
        <h3 id="newsletter-example-title">AI에게 맡긴 일, 원하는 결과로 받으려면</h3>
        <p>큐레이션에서 고른 문서 세 편을 한 호로 엮은 워크숍 예시입니다.</p>
      </header>

      <div className={styles.lead}>
        <span className={styles.label}>핵심 하나</span>
        <h4>무엇을 원하는지, 왜 필요한지 함께 알려주세요.</h4>
        <p>
          Anthropic의 Claude Fable 5 프롬프팅 가이드는 목표와 이유를 구체적으로
          전달하고, 결과를 검증할 수 있게 안내하라고 설명합니다.
        </p>
        <a href="https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/prompting-claude-fable-5" target="_blank" rel="noopener noreferrer">공식 가이드 읽기 ↗</a>
        <div className={styles.application}>
          <strong>내가 해볼 것</strong>
          <p>자주 쓰는 프롬프트 하나에 사용 목적과 원하는 답변 형식을 덧붙여, 이전 답변과 비교해 봅니다.</p>
        </div>
      </div>

      <div className={styles.related}>
        <span className={styles.label}>더 읽을거리 둘</span>
        <a href="https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/claude-prompting-best-practices" target="_blank" rel="noopener noreferrer">
          <strong>원하는 형식과 예시를 덧붙이는 법 ↗</strong>
          <span>프롬프팅 모범 사례 · Anthropic</span>
        </a>
        <a href="https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests" target="_blank" rel="noopener noreferrer">
          <strong>결과가 나아졌는지 평가하는 법 ↗</strong>
          <span>성공 기준 정의 및 평가 구축 · Anthropic</span>
        </a>
      </div>

      <footer className={styles.footer}>
        <a href="https://imakerjun.github.io/ai-newsletter/learn/prompting-fable-5.html" target="_blank" rel="noopener noreferrer">핵심 문서를 다섯 가지 방식으로 깊이 읽기 ↗</a>
      </footer>
    </section>
  )
}
