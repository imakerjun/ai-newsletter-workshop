'use client'

import { usePathname } from 'next/navigation'
import { getDeckForPath } from '../lib/slides'
import { useSlideView } from './SlideView'
import styles from './SectionSlide.module.css'

interface SectionSlideProps {
  n: number
  caption?: string
}

export function SectionSlide({ n, caption }: SectionSlideProps) {
  const { enabled } = useSlideView()
  const pathname = usePathname()
  const deck = pathname ? getDeckForPath(pathname) : null

  if (!enabled || !deck) return null
  if (n < 1 || n > deck.count) return null

  const src = `${deck.dir}/${n}.png`
  const label = `${deck.title} 슬라이드 ${n}/${deck.count}`

  return (
    <figure className={styles.figure}>
      <img src={src} alt={label} className={styles.image} loading="lazy" />
      <figcaption className={styles.caption}>
        <span className={styles.counter}>슬라이드 {n} / {deck.count}</span>
        {caption ? <span className={styles.text}>{caption}</span> : null}
      </figcaption>
    </figure>
  )
}
