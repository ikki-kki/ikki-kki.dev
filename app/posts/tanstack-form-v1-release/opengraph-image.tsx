export const runtime = 'edge'
export const alt = 'TanStack Form v1 출시 기념 둘러보기'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/webp'

export default async function Image() {
  const imageData = await fetch(
    new URL(
      '../../../public/images/og-tanstack-form-v1-release.webp',
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
