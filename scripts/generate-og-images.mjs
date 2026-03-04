import { POSTS, generateOgImageForPost } from './og-utils.mjs'

/**
 * 모든 포스트의 OG 이미지를 한 번에 생성합니다.
 *
 * 각 포스트마다:
 *   1. opengraph-image.tsx를 동적 템플릿(ImageResponse)으로 교체
 *   2. Next.js 컴파일 완료 대기
 *   3. 이미지 fetch → webp 저장
 *   4. opengraph-image.tsx를 정적 서빙 템플릿으로 복원
 *
 * 사용법:
 *   node scripts/generate-og-images.mjs [port]
 *
 * 예시:
 *   node scripts/generate-og-images.mjs
 *   node scripts/generate-og-images.mjs 3001
 */

const port = process.argv[2] || 3000

async function main() {
  console.log('OG 이미지 일괄 생성을 시작합니다...')
  console.log(`개발 서버가 http://localhost:${port} 에서 실행 중이어야 합니다.`)

  for (const post of POSTS) {
    await generateOgImageForPost(post, port)
  }

  console.log('\n✓ 모든 OG 이미지가 성공적으로 생성되었습니다!')
}

main().catch((error) => {
  console.error('\n✗ 생성 실패:', error)
  process.exit(1)
})
