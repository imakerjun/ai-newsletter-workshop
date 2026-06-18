import type { HTMLAttributes, ReactNode } from 'react'
import { Pre } from 'nextra/components'
import styles from './CodeBlock.module.css'

type Props = HTMLAttributes<HTMLPreElement> & {
  'data-language'?: string
  'data-filename'?: string
  'data-copy'?: ''
  'data-word-wrap'?: ''
  icon?: ReactNode
}

const LANGUAGE_LABELS: Record<string, string> = {
  js: 'JavaScript',
  jsx: 'JSX',
  ts: 'TypeScript',
  tsx: 'TSX',
  md: 'Markdown',
  markdown: 'Markdown',
  mdx: 'MDX',
  sh: 'Shell',
  bash: 'Shell',
  zsh: 'Shell',
  shell: 'Shell',
  py: 'Python',
  python: 'Python',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  html: 'HTML',
  css: 'CSS',
  txt: 'Plain Text',
  text: 'Plain Text',
  plaintext: 'Plain Text',
  mermaid: 'Mermaid',
}

export function CodeBlock({ children, ...props }: Props) {
  const lang = props['data-language']
  const filename = props['data-filename']
  const label = filename ?? (lang ? LANGUAGE_LABELS[lang] ?? lang : null)

  return (
    <div className={styles.wrapper} data-has-label={label ? '' : undefined}>
      {label && <span className={styles.label}>{label}</span>}
      <Pre {...props}>{children}</Pre>
    </div>
  )
}
