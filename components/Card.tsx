import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  title: string
  icon?: string
  image?: string
  preview?: string
  vertical?: boolean
  href?: string
  disabled?: boolean
  meta?: string
  children?: ReactNode
}

/**
 * 워크숍 페이지(01-first-issue, references 등) 사이 이동은 같은 탭.
 * 외부 사이트나 /examples/*.html 같은 정적 예시 페이지는 "결과를 보여주는" 링크라
 * 새 탭으로 열어 워크숍 진행 흐름을 잃지 않게 한다.
 */
function opensInNewTab(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('/examples/')
}

export function Card({ title, icon, image, preview, vertical, href, disabled, meta, children }: CardProps) {
  const isVertical = vertical || Boolean(image) || Boolean(preview)
  const cardClass = `${styles.card} ${isVertical ? styles.vertical : ''} ${preview ? styles.hasPreview : ''} ${disabled ? styles.disabled : ''}`

  const content = (
    <div className={cardClass}>
      {preview ? (
        <img src={preview} alt="" className={styles.preview} loading="lazy" />
      ) : image ? (
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
    const newTab = opensInNewTab(href)
    return (
      <a
        href={href}
        className={styles.link}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return content
}
