import type { ReactNode } from 'react'
import styles from './Flow.module.css'

interface FlowStepProps {
  /** 상자 위에 작게 붙는 라벨. 예: "넣기 · input" */
  label: string
  /** 상자 제목. 예: "깊이 읽기" */
  title: string
  /** 상자 아래 작은 메타. 예: "2·3페이지 👀" */
  meta?: string
  /** 강조 상자 (예: 오늘 손을 쓰는 단계) */
  accent?: boolean
  children?: ReactNode
}

interface FlowProps {
  children: ReactNode
}

/**
 * 가로 흐름 도식. 상자 → 상자 → 상자.
 * 워크숍 전체 구조(넣기 → 고르기 → 받기)나 따라하기 여정(미리보기 → 인터넷 주소 → 매일 자동)처럼
 * "순서가 있는 3~4단계"를 한 장 그림으로 보여줄 때 쓴다.
 * 좁은 화면에서는 세로로 쌓이고 화살표가 아래를 향한다.
 */
export function FlowStep({ label, title, meta, accent, children }: FlowStepProps) {
  return (
    <div className={`${styles.step} ${accent ? styles.accent : ''}`}>
      <span className={styles.label}>{label}</span>
      <h4 className={styles.title}>{title}</h4>
      {children && <div className={styles.body}>{children}</div>}
      {meta && <span className={styles.meta}>{meta}</span>}
    </div>
  )
}

export function Flow({ children }: FlowProps) {
  return <div className={styles.flow}>{children}</div>
}
