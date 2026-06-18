import type { ReactNode } from 'react'
import styles from './Steps.module.css'

interface StepProps {
  title: string
  children?: ReactNode
}

interface StepsProps {
  children: ReactNode
}

export function Step({ title, children }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.number} aria-hidden="true" />
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </div>
  )
}

export function Steps({ children }: StepsProps) {
  return <div className={styles.steps}>{children}</div>
}
