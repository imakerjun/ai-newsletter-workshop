import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { SlideViewProvider } from '../components/SlideView'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: '나만의 AI 뉴스레터 만들기 워크숍',
    template: '%s | 나만의 AI 뉴스레터 만들기',
  },
  description:
    '코딩 없이 Claude Cowork에게 말로 시켜 오직 나만을 위한 AI 뉴스레터를 만든다. 첫 호를 아티팩트로 만들어 이메일로 받고, 내 GitHub Pages에 쌓아 매일 아침 자동으로 받는다. 우아한형제들 사내 60분 미니 실습.',
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
    나만의 AI 뉴스레터 만들기
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
            search={null}
            sidebar={{
              defaultMenuCollapseLevel: 1,
              toggleButton: true,
            }}
            footer={
              <Footer>
                <span style={{ fontSize: '0.8125rem', color: 'rgb(155, 155, 155)' }}>
                  © {new Date().getFullYear()} 나만의 AI 뉴스레터 만들기 워크숍 · 우아한형제들 사내
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
