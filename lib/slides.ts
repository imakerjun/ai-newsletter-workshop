export type SlideDeck = {
  dir: string
  count: number
  title: string
}

// v1은 PNG 슬라이드 덱을 쓰지 않는다. 슬라이드 토글은 layout에서 비활성화.
export const slideDecks: Record<string, SlideDeck> = {}

export function getDeckForPath(pathname: string): SlideDeck | null {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return slideDecks[normalized] ?? null
}
