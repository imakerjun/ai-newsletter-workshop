import type { ReactNode } from 'react'
import styles from './Screenshot.module.css'

interface Mark {
  /** 표시할 지점의 가로 위치, 이미지 폭 기준 % */
  x: number
  /** 표시할 지점의 세로 위치, 이미지 높이 기준 % */
  y: number
  /** 빨간 라벨. 화살표는 방향에 맞춰 자동으로 붙는다 */
  label?: string
  /** 라벨이 뻗는 방향. 기본은 x<50%면 오른쪽, 그 외엔 왼쪽.
   *  같은 줄에 마크가 여러 개라 자동 판단이 겹칠 때만 명시로 지정한다. */
  labelSide?: 'left' | 'right'
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
        {marks.map((m, i) => {
          const side = m.labelSide ?? (m.x < 50 ? 'right' : 'left')
          return (
            <span
              key={i}
              className={styles.mark}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              aria-hidden="true"
            >
              <span className={styles.ring} />
              {m.label && (
                <span className={`${styles.label} ${side === 'right' ? styles.labelRight : styles.labelLeft}`}>
                  {side === 'right' ? `← ${m.label}` : `${m.label} →`}
                </span>
              )}
            </span>
          )
        })}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
