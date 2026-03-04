import { writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

export const __dirname = dirname(fileURLToPath(import.meta.url))

export const POSTS = [
  {
    name: 'open-graph-twitter-card',
    title: '오픈그래프(Open Grape) 태그와 트위터 카드(Twitter Card)',
    description: 'OG 이미지 그게 뭔데',
  },
  {
    name: 'nested-feature-branch-workflow',
    title: 'Nested Feature Branch Workflow 전략으로 브랜치 관리',
    description: '브랜치를 브랜치에 써서 드셔보세요',
  },
  {
    name: 'eslint-how-it-works',
    title: 'ESLint는 어떻게 동작할까',
    description: 'ESLint의 내부 동작 원리 파헤치기',
  },
  {
    name: 'component-without-self-and-oop-component',
    title: 'self가 없는 컴포넌트와 OOP 컴포넌트',
    description: '함수형 컴포넌트와 클래스 컴포넌트의 차이점',
  },
  {
    name: 'tanstack-form-v1-release',
    title: 'TanStack Form v1이 릴리즈 되었다',
    description: 'React에서 form 잘 쓰는 법',
  },
  {
    name: 'the-magic-of-react-concurrency',
    title: 'React Concurrency의 마법',
    description: '리액트 동시성 기능의 핵심 원리',
  },
  {
    name: 'toss-frontend-accelerator-review',
    title: 'Toss Frontend Accelerator 5기를 수료하며',
    description: '6주간의 Toss Frontend Accelerator 후기',
  },
]

/**
 * opengraph-image.tsx 파일 경로를 반환합니다.
 */
export function getOpengraphImagePath(postSlug) {
  return join(__dirname, `../app/posts/${postSlug}/opengraph-image.tsx`)
}

/**
 * ImageResponse를 사용하는 동적 OG 이미지 템플릿을 작성합니다.
 * 스크립트 실행 시 이 템플릿으로 교체한 뒤 Next.js에서 렌더링을 거쳐 이미지를 생성합니다.
 */
export function buildDynamicTemplate(title, description) {
  const escaped = title.replace(/'/g, "\\'")
  const escapedDesc = description.replace(/'/g, "\\'")
  return `import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '${escaped}'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const [bgData, boldFont, regularFont] = await Promise.all([
    fetch(
      new URL('../../../public/assets/og-bg.png', import.meta.url),
    ).then((res) => res.arrayBuffer()),
    fetch(
      new URL('../../../public/fonts/GeistMono-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer()),
    fetch(
      new URL('../../../public/fonts/GeistMono-Regular.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer()),
  ])

  const bgBase64 = Buffer.from(bgData).toString('base64')
  const bgUrl = \`data:image/png;base64,\${bgBase64}\`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        <img
          src={bgUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '0 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              marginBottom: '80px',
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontFamily: 'GeistMono',
                fontWeight: 700,
                color: '#1a3c1f',
                lineHeight: 1.2,
                whiteSpace: 'pre-wrap',
              }}
            >
              {'${escaped}'}
            </div>
            <div
              style={{
                fontSize: 40,
                fontFamily: 'GeistMono',
                fontWeight: 400,
                color: '#2e6b38',
              }}
            >
              {'${escapedDesc}'}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'GeistMono', data: boldFont, weight: 700 },
        { name: 'GeistMono', data: regularFont, weight: 400 },
      ],
    },
  )
}
`
}

/**
 * 생성된 webp를 정적으로 서빙하는 템플릿을 작성합니다.
 * 이미지 생성 완료 후 이 템플릿으로 되돌립니다.
 */
export function buildStaticTemplate(postSlug, alt) {
  const escaped = alt.replace(/'/g, "\\'")
  return `export const runtime = 'edge'
export const alt = '${escaped}'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/webp'

export default async function Image() {
  const imageData = await fetch(
    new URL(
      '../../../public/images/og-${postSlug}.webp',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
`
}

/**
 * Next.js 개발 서버가 변경된 파일을 컴파일할 때까지 폴링합니다.
 * content-type이 image/png로 바뀌면 동적 템플릿이 적용된 것으로 판단합니다.
 */
export async function waitForDynamicTemplate(
  url,
  { timeoutMs = 20000, intervalMs = 500 } = {},
) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url)
      if (res.ok && res.headers.get('content-type')?.startsWith('image/png')) {
        return
      }
    } catch {
      // 아직 준비 안됨
    }
    await new Promise((r) => setTimeout(r, intervalMs))
  }
  throw new Error(
    `Timed out waiting for dynamic template to be compiled (${url})`,
  )
}

/**
 * 단일 포스트의 OG 이미지를 생성하는 전체 사이클:
 * 동적 템플릿 작성 → 컴파일 대기 → 이미지 fetch → webp 저장 → 정적 템플릿 복원
 */
export async function generateOgImageForPost(post, port = 3000) {
  const { name, title, description } = post
  const filePath = getOpengraphImagePath(name)
  const url = `http://localhost:${port}/posts/${name}/opengraph-image`
  const outputPath = join(__dirname, `../public/images/og-${name}.webp`)

  console.log(`\n[${name}] 동적 템플릿 작성 중...`)
  await writeFile(filePath, buildDynamicTemplate(title, description))

  console.log(`[${name}] Next.js 컴파일 대기 중...`)
  await waitForDynamicTemplate(url)

  console.log(`[${name}] 이미지 생성 중...`)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`,
    )
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  await sharp(buffer).webp({ quality: 90, effort: 6 }).toFile(outputPath)
  console.log(`[${name}] ✓ og-${name}.webp 저장 완료`)

  console.log(`[${name}] 정적 템플릿 복원 중...`)
  await writeFile(filePath, buildStaticTemplate(name, title))
  console.log(`[${name}] ✓ opengraph-image.tsx 복원 완료`)
}
