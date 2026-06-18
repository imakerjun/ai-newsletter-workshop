import styles from './PageIcon.module.css'

type PageIconProps = {
  src: string
  alt?: string
}

export function PageIcon({ src, alt = '' }: PageIconProps) {
  return (
    <div className={styles.wrap}>
      <img className={styles.icon} src={src} alt={alt} />
    </div>
  )
}
