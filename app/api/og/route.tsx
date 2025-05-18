import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title')

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://ikki-kki.dev/assets/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 205,
            marginBottom: 120,
            display: 'flex',
            fontSize: 80,
            letterSpacing: '-0.025em',
            fontStyle: 'normal',
            color: '#4F4F4F',
            lineHeight: '110px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
