export const runtime = 'edge'
export const alt = '자아가 없는 컴포넌트와 객체지향 컴포넌트'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/webp'

export default async function Image() {
  const imageData = await fetch(
    new URL('../../../public/images/og-component-without-self-and-oop-component.webp', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
