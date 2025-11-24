import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qpsypezomogp2dxq.public.blob.vercel-storage.com',
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
