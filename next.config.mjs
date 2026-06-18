import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/',
  search: { codeblocks: false },
  // 모든 코드 블록에 노션 스타일 copy 버튼을 기본 노출.
  // 개별 차단은 ```lang copy=false 로 가능.
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
  devIndicators: false,
  // GitHub Pages 배포 시 아래 두 줄 추가:
  // output: 'export',
  // images: { unoptimized: true },
})
