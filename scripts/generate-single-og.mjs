import { POSTS, generateOgImageForPost } from './og-utils.mjs'

/**
 * 단일 포스트의 OG 이미지를 생성합니다.
 *
 * 각 포스트마다:
 *   1. opengraph-image.tsx를 동적 템플릿(ImageResponse)으로 교체
 *   2. Next.js 컴파일 완료 대기
 *   3. 이미지 fetch → webp 저장
 *   4. opengraph-image.tsx를 정적 서빙 템플릿으로 복원
 *
 * 사용법:
 *   node scripts/generate-single-og.mjs <post-slug> [port]
 *
 * 예시:
 *   node scripts/generate-single-og.mjs toss-frontend-accelerator-review
 *   node scripts/generate-single-og.mjs my-new-post 3001
 */

const postSlug = process.argv[2]
const port = process.argv[3] || 3000

if (!postSlug) {
  console.error('Error: Post slug이 필요합니다.')
  console.error('Usage: node scripts/generate-single-og.mjs <post-slug> [port]')
  console.error(
    'Example: node scripts/generate-single-og.mjs toss-frontend-accelerator-review',
  )
  process.exit(1)
}

const post = POSTS.find((p) => p.name === postSlug)

if (!post) {
  console.error(`Error: '${postSlug}' 포스트를 찾을 수 없습니다.`)
  console.error('scripts/og-utils.mjs의 POSTS 배열에 포스트를 추가해주세요.')
  console.error('\n등록된 포스트 목록:')
  POSTS.forEach((p) => console.error(`  - ${p.name}`))
  process.exit(1)
}

async function main() {
  console.log(`OG 이미지 생성을 시작합니다: ${postSlug}`)
  console.log(`개발 서버가 http://localhost:${port} 에서 실행 중이어야 합니다.`)

  await generateOgImageForPost(post, port)

  console.log('\n✓ OG 이미지가 성공적으로 생성되었습니다!')
}

main().catch((error) => {
  console.error('\n✗ 생성 실패:', error)
  process.exit(1)
})
