import createMDX from '@next/mdx'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import type { NextConfig } from 'next'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

const withVanillaExtract = createVanillaExtractPlugin()

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
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ikki-kki-dev.vercel.app',
          },
        ],
        destination: 'https://ikki-kki.dev/:path*',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeKatex,
      [rehypePrismPlus, { showLineNumbers: true }],
    ],
  },
})

export default withVanillaExtract(withMDX(nextConfig))
