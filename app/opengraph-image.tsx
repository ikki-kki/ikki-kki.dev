import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '이끼끼 블로그'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // og-home.png 이미지를 base64로 인코딩해서 반환
  const imageData = await fetch(
    new URL('../public/images/og-home.png', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
