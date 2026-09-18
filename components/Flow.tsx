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
  /** 상자 상단을 가로로 채우는 실제 화면 캡처(16:10). "이 단계가 끝나면 이런 화면"을 보여줄 때 */
  preview?: string
  /** 라벨 위 작은 일러스트. 화면 캡처가 없는 개념 단계용 */
  icon?: string
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
export function FlowStep({ label, title, meta, accent, preview, icon, children }: FlowStepProps) {
  return (
    <div className={`${styles.step} ${accent ? styles.accent : ''} ${preview ? styles.hasPreview : ''}`}>
      {preview && <img src={preview} alt="" className={styles.preview} loading="lazy" />}
      {icon && <img src={icon} alt="" className={styles.icon} loading="lazy" />}
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
