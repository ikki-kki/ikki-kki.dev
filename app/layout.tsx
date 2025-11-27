import './globals.css'
import BackgroundWrapper from '@/components/background-wrapper'
import Navbar from '@/components/navbar'
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
  title: 'ikki-kki',
  description:
    'Full-stack developer from Taiwan with a passion for crafting seamless user experiences and building scalable systems.',
  openGraph: {
    title: 'ikki-kki',
    description:
      'Full-stack developer from Taiwan with a passion for crafting seamless user experiences and building scalable systems.',
    url: 'https://ikki-kki.dev',
    siteName: 'ikki-kki',
    images: [
      {
        url: 'https://ikki-kki.dev/api/og?title=ikki-kki.dev',
        alt: 'ikki-kki.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ikki-kki',
    creator: '@ikki-kki',
  },
  metadataBase: new URL('https://ikki-kki.dev'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="z-0">
          <BackgroundWrapper />
        </div>
        <div className="container mx-auto font-mono px-6 relative z-10">
          <Navbar />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
