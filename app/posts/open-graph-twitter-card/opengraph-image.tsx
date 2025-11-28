export const runtime = 'edge'
export const alt = '오픈그래프(Open Grape) 태그와 트위터 카드(Twitter Card)'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/webp'

export default async function Image() {
  const imageData = await fetch(
    new URL(
      '../../../public/images/og-open-graph-twitter-card.webp',
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
