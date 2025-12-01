import Hero from '@/components/about/hero'
import Footer from '@/components/shared/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://ikki-kki-dev.vercel.app',
  },
  openGraph: {
    url: 'https://ikki-kki-dev.vercel.app',
  },
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Footer fixed />
    </div>
  )
}
