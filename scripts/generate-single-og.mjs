import { writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * 단일 포스트의 OG 이미지를 생성합니다.
 *
 * 사용법:
 *   node scripts/generate-single-og.mjs post-slug-name
 *
 * 예시:
 *   node scripts/generate-single-og.mjs my-new-post
 */

const postSlug = process.argv[2]
const port = process.argv[3] || 3000

if (!postSlug) {
  console.error('Error: Post slug is required')
  console.error('Usage: node scripts/generate-single-og.mjs <post-slug> [port]')
  console.error('Example: node scripts/generate-single-og.mjs my-new-post 3000')
  process.exit(1)
}

async function generateOgImage(slug, serverPort) {
  const url = `http://localhost:${serverPort}/posts/${slug}/opengraph-image`

  console.log(`Generating OG image for: ${slug}...`)
  console.log(`Fetching from: ${url}`)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      )
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Convert to WebP for better compression
    const outputPath = join(__dirname, `../public/images/og-${slug}.webp`)
    await sharp(buffer).webp({ quality: 90, effort: 6 }).toFile(outputPath)

    console.log(`✓ Generated: og-${slug}.webp`)
    console.log(`✓ Saved to: ${outputPath}`)
  } catch (error) {
    console.error(`✗ Failed to generate ${slug}:`, error.message)
    throw error
  }
}

async function main() {
  console.log('Starting OG image generation for single post...')
  console.log(
    `Make sure your dev server is running on http://localhost:${port}\n`,
  )

  await generateOgImage(postSlug, port)

  console.log('\n✓ OG image generated successfully!')
}

main().catch((error) => {
  console.error('\n✗ Generation failed:', error)
  process.exit(1)
})
