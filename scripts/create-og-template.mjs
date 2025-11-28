import { writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * 새 포스트의 opengraph-image.tsx 템플릿 파일을 생성합니다.
 *
 * 사용법:
 *   node scripts/create-og-template.mjs <post-slug> "<alt-text>"
 *
 * 예시:
 *   node scripts/create-og-template.mjs my-new-post "My New Post Title"
 */

const postSlug = process.argv[2]
const altText = process.argv[3]

if (!postSlug || !altText) {
  console.error('Error: Post slug and alt text are required')
  console.error(
    'Usage: node scripts/create-og-template.mjs <post-slug> "<alt-text>"',
  )
  console.error(
    'Example: node scripts/create-og-template.mjs my-new-post "My New Post Title"',
  )
  process.exit(1)
}

const template = `export const runtime = 'edge'
export const alt = '${altText}'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/webp'

export default async function Image() {
  const imageData = await fetch(
    new URL('../../../public/images/og-${postSlug}.webp', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
`

async function main() {
  const outputPath = join(
    __dirname,
    `../app/posts/${postSlug}/opengraph-image.tsx`,
  )

  console.log(`Creating opengraph-image.tsx template for: ${postSlug}`)
  console.log(`Alt text: ${altText}`)
  console.log(`Output path: ${outputPath}\n`)

  try {
    await writeFile(outputPath, template)
    console.log(`✓ Template created successfully!`)
    console.log(`\nNext steps:`)
    console.log(`1. Make sure your dev server is running: pnpm dev`)
    console.log(
      `2. Generate the OG image: node scripts/generate-single-og.mjs ${postSlug}`,
    )
  } catch (error) {
    console.error(`✗ Failed to create template:`, error.message)
    throw error
  }
}

main().catch((error) => {
  console.error('\n✗ Template creation failed:', error)
  process.exit(1)
})
