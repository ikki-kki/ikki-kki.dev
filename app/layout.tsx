import * as styles from './layout.css'
import './prism-theme.css'
import '@/app/globals.css.ts'
import BackgroundWrapper from '@/components/shared/backgroundWrapper'
import Navbar from '@/components/shared/navbar'
import { generateWebsiteJsonLd } from '@/lib/structured-data'
import { themeClass } from '@/lib/theme.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '이끼끼 블로그',
  description: 'WELCOME!',
  openGraph: {
    title: '이끼끼 블로그',
    description: 'WELCOME!',
    url: 'https://ikki-kki-dev.vercel.app',
    siteName: '이끼끼 블로그',
    images: [
      {
        url: 'https://ikki-kki-dev.vercel.app/images/og-home.png',
        width: 1200,
        height: 630,
        alt: '이끼끼 블로그',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ikki-kki',
    creator: '@ikki-kki',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://ikki-kki-dev.vercel.app',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'ikki-kki RSS Feed' }],
    },
  },
  metadataBase: new URL('https://ikki-kki-dev.vercel.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteJsonLd = generateWebsiteJsonLd()

  return (
    <html lang="ko" suppressHydrationWarning className={themeClass}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}
      >
        <div className={styles.backgroundLayer}>
          <BackgroundWrapper />
        </div>
        <div className={styles.container}>
          <Navbar />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
