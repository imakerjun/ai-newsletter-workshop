import type { AnchorHTMLAttributes } from 'react'
import type { UrlObject } from 'url'
import Link from 'next/link'

type AnchorHref = string | UrlObject

interface AnchorProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: AnchorHref
  prefetch?: boolean
}

const externalUrlPattern = /^https?:\/\//

function withFocusClass(className?: string) {
  return ['x:focus-visible:nextra-focus', className].filter(Boolean).join(' ')
}

export function Anchor({
  href = '',
  prefetch,
  className,
  rel,
  target,
  ...props
}: AnchorProps) {
  const anchorClassName = withFocusClass(className)

  if (typeof href === 'string') {
    if (href.startsWith('#')) {
      return <a href={href} className={anchorClassName} {...props} />
    }

    if (externalUrlPattern.test(href)) {
      return (
        <a
          href={href}
          target={target ?? '_blank'}
          rel={rel ?? 'noreferrer'}
          className={anchorClassName}
          {...props}
        />
      )
    }
  }

  return (
    <Link href={href} prefetch={prefetch} className={anchorClassName} {...props} />
  )
}
