import type { ComponentPropsWithoutRef } from 'react'
import styles from './Table.module.css'

type TableProps = ComponentPropsWithoutRef<'table'>

export function Table({ className, ...props }: TableProps) {
  const tableClassName = className
    ? `${className} ${styles.table}`
    : styles.table

  return (
    <div className={styles.scroller}>
      <table {...props} className={tableClassName} />
    </div>
  )
}
