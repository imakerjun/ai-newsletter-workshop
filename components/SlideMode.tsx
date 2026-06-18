'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getDeckForPath, type SlideDeck } from '../lib/slides'
import styles from './SlideMode.module.css'

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (target.isContentEditable) return true
  return false
}

export default function SlideMode() {
  const pathname = usePathname()
  const deck: SlideDeck | null = useMemo(
    () => (pathname ? getDeckForPath(pathname) : null),
    [pathname]
  )

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setOpen(false)
    setIndex(0)
  }, [pathname])

  const close = useCallback(() => setOpen(false), [])
  const next = useCallback(() => {
    if (!deck) return
    setIndex((i) => Math.min(i + 1, deck.count - 1))
  }, [deck])
  const prev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (isEditableTarget(e.target)) return

      if (!open) {
        if (e.shiftKey && e.code === 'KeyP' && !e.metaKey && !e.ctrlKey && !e.altKey) {
          if (!deck) return
          e.preventDefault()
          setIndex(0)
          setOpen(true)
        }
        return
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return

      switch (e.key) {
        case 'Escape':
        case 'q':
        case 'Q':
          e.preventDefault()
          close()
          return
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          next()
          return
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          prev()
          return
        case 'Home':
          e.preventDefault()
          setIndex(0)
          return
        case 'End':
          if (!deck) return
          e.preventDefault()
          setIndex(deck.count - 1)
          return
        default:
          if (/^[1-9]$/.test(e.key) && deck) {
            const target = Number(e.key) - 1
            if (target < deck.count) {
              e.preventDefault()
              setIndex(target)
            }
          }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, deck, close, next, prev])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  if (!open || !deck) return null

  const slideNumber = index + 1
  const src = `${deck.dir}/${slideNumber}.png`
  const preloadNext =
    index + 1 < deck.count ? `${deck.dir}/${slideNumber + 1}.png` : null

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`슬라이드 모드 — ${deck.title}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
    >
      <div className={styles.title}>{deck.title}</div>

      <img
        className={styles.image}
        src={src}
        alt={`${deck.title} ${slideNumber}/${deck.count}`}
        draggable={false}
      />

      {preloadNext && (
        <img src={preloadNext} alt="" aria-hidden="true" className={styles.preload} />
      )}

      <button
        type="button"
        className={`${styles.navButton} ${styles.navPrev}`}
        onClick={prev}
        disabled={index === 0}
        aria-label="이전 슬라이드"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navNext}`}
        onClick={next}
        disabled={index === deck.count - 1}
        aria-label="다음 슬라이드"
      >
        ›
      </button>

      <button
        type="button"
        className={styles.closeButton}
        onClick={close}
        aria-label="슬라이드 모드 닫기"
      >
        ✕
      </button>

      <div className={styles.counter}>
        {slideNumber} / {deck.count}
      </div>
    </div>
  )
}
