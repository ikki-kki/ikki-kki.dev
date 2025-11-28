import { writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))

const posts = [
  {
    name: 'open-graph-twitter-card',
    title: '오픈그래프(Open Grape) 태그와 트위터 카드(Twitter Card)',
    description: 'OG 이미지 그게 뭔데',
  },
  {
    name: 'nested-feature-branch-workflow',
    title: 'Nested Feature Branch Workflow 중첩 기능 브랜치 워크플로우',
    description: '복잡한 작업을 효율적으로 관리하는 브랜치 전략',
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
]

async function generateOgImage(post) {
  const url = `http://localhost:3000/posts/${post.name}/opengraph-image`
  
  console.log(`Generating OG image for: ${post.name}...`)
  
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
    }
    
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    // Convert to WebP for better compression
    const outputPath = join(__dirname, `../public/images/og-${post.name}.webp`)
    await sharp(buffer)
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath)
    
    console.log(`✓ Generated: og-${post.name}.webp`)
  } catch (error) {
    console.error(`✗ Failed to generate ${post.name}:`, error.message)
    throw error
  }
}

async function main() {
  console.log('Starting OG image generation...')
  console.log('Make sure your dev server is running on http://localhost:3000\n')
  
  for (const post of posts) {
    await generateOgImage(post)
  }
  
  console.log('\n✓ All OG images generated successfully!')
}

main().catch((error) => {
  console.error('\n✗ Generation failed:', error)
  process.exit(1)
})
