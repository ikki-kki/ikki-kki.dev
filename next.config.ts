import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

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
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, [rehypePrismPlus, { showLineNumbers: true }]],
  },
})

export default withVanillaExtract(withMDX(nextConfig))
