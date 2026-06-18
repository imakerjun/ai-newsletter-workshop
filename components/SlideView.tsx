'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'my-learning-agent.slideView'

type SlideViewState = {
  enabled: boolean
  toggle: () => void
}

const SlideViewContext = createContext<SlideViewState>({
  enabled: false,
  toggle: () => {},
})

export function SlideViewProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === 'on') setEnabled(true)
    } catch {
      // localStorage 차단된 환경은 그냥 off로
    }
  }, [])

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off')
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  return (
    <SlideViewContext.Provider value={{ enabled, toggle }}>
      {children}
    </SlideViewContext.Provider>
  )
}

export function useSlideView() {
  return useContext(SlideViewContext)
}
