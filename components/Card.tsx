import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  title: string
  icon?: string
  image?: string
  vertical?: boolean
  href?: string
  disabled?: boolean
  meta?: string
  children?: ReactNode
}

export function Card({ title, icon, image, vertical, href, disabled, meta, children }: CardProps) {
  const isVertical = vertical || Boolean(image)
  const cardClass = `${styles.card} ${isVertical ? styles.vertical : ''} ${disabled ? styles.disabled : ''}`

  const content = (
    <div className={cardClass}>
      {image ? (
        <img src={image} alt="" className={styles.image} />
      ) : (
        icon && <span className={styles.icon}>{icon}</span>
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {children && <div className={styles.description}>{children}</div>}
        {meta && <span className={styles.meta}>{meta}</span>}
      </div>
      {!isVertical && href && !disabled && <span className={styles.arrow} aria-hidden="true">&rarr;</span>}
    </div>
  )

  if (href && !disabled) {
    return (
      <a href={href} className={styles.link}>
        {content}
      </a>
    )
  }

  return content
}
