import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '자아가 없는 컴포넌트와 객체지향 컴포넌트'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const geistMonoRegular = fetch(
    new URL('../../../public/fonts/GeistMono-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const geistMonoBold = fetch(
    new URL('../../../public/fonts/GeistMono-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          background: `radial-gradient(circle at center, #aedd66 0%, #f7fdec 70%)`,
          fontFamily: 'GeistMono',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: '#1f3c1a',
              maxWidth: '1000px',
              lineHeight: 1.3,
            }}
          >
            자아가 없는 컴포넌트와 객체지향 컴포넌트
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 400,
              color: '#336429',
              lineHeight: 1.3,
              maxWidth: '900px',
            }}
          >
            공통 컴포넌트는 허상이다.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'GeistMono',
          data: await geistMonoRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'GeistMono',
          data: await geistMonoBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
