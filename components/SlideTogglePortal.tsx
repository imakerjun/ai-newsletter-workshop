'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { getDeckForPath } from '../lib/slides'
import { useSlideView } from './SlideView'
import styles from './SlideTogglePortal.module.css'

function findCopyContainer(): HTMLElement | null {
  const buttons = document.querySelectorAll('button')
  for (const btn of Array.from(buttons)) {
    const text = btn.textContent?.trim() ?? ''
    if (text === 'Copy page' || text === 'Copied') {
      const container = btn.closest('div.nextra-border') as HTMLElement | null
      if (container) return container
    }
  }
  return null
}

export function SlideTogglePortal() {
  const { enabled, toggle } = useSlideView()
  const pathname = usePathname()
  const deck = pathname ? getDeckForPath(pathname) : null
  const [host, setHost] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!deck) {
      setHost(null)
      return
    }

    let mounted: HTMLElement | null = null
    let attempts = 0
    let raf = 0

    function tryMount() {
      const container = findCopyContainer()
      if (!container || !container.parentElement) {
        if (attempts++ < 30) {
          raf = window.requestAnimationFrame(tryMount)
        }
        return
      }
      mounted = document.createElement('span')
      mounted.dataset.slot = 'slide-toggle-portal'
      container.parentElement.insertBefore(mounted, container)
      setHost(mounted)
    }

    tryMount()

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      mounted?.remove()
      setHost(null)
    }
  }, [pathname, deck])

  if (!deck || !host) return null

  return createPortal(
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      title={
        enabled
          ? '본문 사이의 슬라이드를 끕니다'
          : `본문 사이에 시각화 ${deck.count}장을 끼워서 봅니다. 한 번 켜면 다음 페이지에서도 유지.`
      }
      className={`${styles.button} ${enabled ? styles.on : ''}`}
    >
      <span className={styles.icon} aria-hidden="true">{enabled ? '📑' : '📊'}</span>
      <span className={styles.label}>{enabled ? '슬라이드 끄기' : '슬라이드 보기'}</span>
    </button>,
    host
  )
}
