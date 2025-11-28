export const runtime = 'edge'
export const alt = 'Nested Feature Branch Workflow 전략으로 브랜치 관리'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/webp'

export default async function Image() {
  const imageData = await fetch(
    new URL('../../../public/images/og-nested-feature-branch-workflow.webp', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
