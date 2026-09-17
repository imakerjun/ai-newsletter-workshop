import type { ReactNode } from 'react'
import styles from './Screenshot.module.css'

interface Mark {
  /** 표시할 지점의 가로 위치, 이미지 폭 기준 % */
  x: number
  /** 표시할 지점의 세로 위치, 이미지 높이 기준 % */
  y: number
  /** 링 왼쪽에 붙는 빨간 라벨. 끝에 → 가 자동으로 붙는다 */
  label?: string
}

interface ScreenshotProps {
  src: string
  alt: string
  caption?: ReactNode
  marks?: Mark[]
}

export function Screenshot({ src, alt, caption, marks = [] }: ScreenshotProps) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <img src={src} alt={alt} className={styles.image} loading="lazy" />
        {marks.map((m, i) => (
          <span
            key={i}
            className={styles.mark}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            aria-hidden="true"
          >
            <span className={styles.ring} />
            {m.label && <span className={styles.label}>{m.label} →</span>}
          </span>
        ))}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
