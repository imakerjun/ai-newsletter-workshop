import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardGridProps {
  children: ReactNode
  columns?: 1 | 2 | 3
  variant?: 'default' | 'examples'
}

export function CardGrid({ children, columns = 2, variant = 'default' }: CardGridProps) {
  const grid = (
    <div
      className={styles.grid}
      style={{ '--columns': columns } as React.CSSProperties}
    >
      {children}
    </div>
  )

  return variant === 'examples' ? <div className={styles.examples}>{grid}</div> : grid
}
