import styles from './CurationExample.module.css'

export type CurationCandidate = {
  title: string
  source: string
  href?: string
  decision: 'lead' | 'related' | 'excluded'
  reason: string
  criteria: string[]
}

export type CurationExampleProps = {
  topic: string
  context: string
  candidates: CurationCandidate[]
}

const decisionLabels: Record<CurationCandidate['decision'], string> = {
  lead: '핵심 소식',
  related: '더 읽을거리',
  excluded: '이번 호 제외',
}

export function CurationExample({ topic, context, candidates }: CurationExampleProps) {
  const counts = candidates.reduce(
    (totals, candidate) => {
      totals[candidate.decision] += 1
      return totals
    },
    { lead: 0, related: 0, excluded: 0 },
  )

  return (
    <section id="curation-example" className={styles.example} aria-label={`${topic} 큐레이션 예시`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>이번 호의 관심사</p>
        <p className={styles.topic}>{topic}</p>
        <p className={styles.context}>{context}</p>
        <div className={styles.counts} aria-label="후보 선정 결과">
          <span className={styles.total}>후보 {candidates.length}개</span>
          <span>핵심 소식 {counts.lead}개</span>
          <span>더 읽을거리 {counts.related}개</span>
          <span>제외 {counts.excluded}개</span>
        </div>
      </header>

      <div className={styles.candidates}>
        {candidates.map((candidate, index) => (
          <details
            className={`${styles.candidate} ${styles[candidate.decision]}`}
            key={`${candidate.source}-${candidate.title}`}
            open={candidate.decision === 'lead'}
          >
            <summary className={styles.summary}>
              <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.summaryContent}>
                <span className={styles.headline}>
                  <span className={styles.badge}>{decisionLabels[candidate.decision]}</span>
                  <span className={styles.title}>{candidate.title}</span>
                </span>
                <span className={styles.source}>{candidate.source}</span>
              </span>
              <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </summary>
            <div className={styles.reason}>
              <p>{candidate.reason}</p>
              {candidate.criteria.length > 0 && (
                <div className={styles.criteria} aria-label="판단 기준">
                  {candidate.criteria.map((criterion) => (
                    <span className={styles.criterion} key={criterion}>{criterion}</span>
                  ))}
                </div>
              )}
              {candidate.href && (
                <a className={styles.sourceLink} href={candidate.href} target="_blank" rel="noopener noreferrer" aria-label={`${candidate.title} 출처 확인 (새 창)`}>
                  출처 확인
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
                  </svg>
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
      <p className={styles.hint}>소식 제목을 누르면 선택하거나 제외한 이유를 볼 수 있습니다.</p>
    </section>
  )
}
