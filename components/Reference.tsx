import styles from './Reference.module.css'

interface ReferenceProps {
  title: string
  meta?: string
  href: string
  icon?: string
}

export function Reference({
  title,
  meta,
  href,
  icon = '🔗',
}: ReferenceProps) {
  let domain = ''
  try {
    domain = new URL(href).hostname.replace(/^www\./, '')
  } catch {
    domain = href
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <div className={styles.card}>
        <div className={styles.icon} aria-hidden>
          {icon}
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          {meta && <div className={styles.meta}>{meta}</div>}
          <div className={styles.domain}>{domain}</div>
        </div>
      </div>
    </a>
  )
}
