import type { ReactNode } from 'react'
import styles from './Callout.module.css'

type CalloutType = 'info' | 'warning' | 'tip' | 'danger' | 'note' | 'goal'

interface CalloutProps {
  type?: CalloutType
  emoji?: string
  title?: ReactNode
  children: ReactNode
}

const defaultIcons: Record<CalloutType, ReactNode> = {
  info: '\u{1F4A1}',
  warning: '\u26A0\uFE0F',
  tip: '\u2705',
  danger: '\u{1F6AB}',
  note: '\u{1F4DD}',
  goal: (
    <img src="/illustrations/rocket-goal.png" alt="" width="32" height="32" className={styles.illustration} />
  ),
}

export function Callout({ type = 'info', emoji, title, children }: CalloutProps) {
  const icon = emoji ?? defaultIcons[type]

  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <span className={styles.emoji} aria-hidden="true">{icon}</span>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    </div>
  )
}
