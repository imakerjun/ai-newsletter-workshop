import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { SlideViewProvider } from '../components/SlideView'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: '뉴스레터 만들기 번개 · Input·Process편',
    template: '%s | 뉴스레터 만들기 번개',
  },
  description:
    '학습 에이전트를 input·process·output으로 본다. Output편(PKM)에 이어, 이번엔 input을 잘 넣는 두 동작 — 여러 관점으로 재방문, 하나의 하이라이트 — 을 라이브로 시연한다.',
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
    뉴스레터 번개
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
                  © {new Date().getFullYear()} 뉴스레터 만들기 번개 · 우아한형제들 사내
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
