import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { SlideViewProvider } from '../components/SlideView'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'AI 학습 허브 만들기 워크숍',
    template: '%s | AI 학습 허브 만들기 워크숍',
  },
  description:
    '코딩 없이 AI 도구로 나만의 AI 학습 허브를 만든다. 어려운 문서를 여러 렌즈로 깊이 읽고(input), 24시간 소식을 큐레이션해(process), 관심사 맞춤 뉴스레터로 매일 받아본다(output). 우아한형제들 사내 워크숍.',
}

const logo = (
  <span
    style={{
      fontWeight: 600,
      fontSize: '0.9375rem',
      letterSpacing: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
    }}
  >
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 999,
        background: '#3D6FF2',
      }}
    />
    AI 학습 허브 워크숍
  </span>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </Head>
      <body>
        <SlideViewProvider>
          <Layout
            navbar={
              <Navbar logo={logo}>
                <ThemeSwitch lite className="theme-switch-navbar" />
              </Navbar>
            }
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/imakerjun/ai-newsletter-workshop/tree/main"
            copyPageButton={false}
            darkMode={false}
            sidebar={{
              defaultMenuCollapseLevel: 1,
              toggleButton: true,
            }}
            footer={
              <Footer>
                <span style={{ fontSize: '0.8125rem', color: 'rgb(155, 155, 155)' }}>
                  © {new Date().getFullYear()} AI 학습 허브 만들기 워크숍 · 우아한형제들 사내
                </span>
              </Footer>
            }
          >
            {children}
          </Layout>
        </SlideViewProvider>
      </body>
    </html>
  )
}
