import createMDX from '@next/mdx'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    rehypePlugins: [
      rehypeCodeTitles,
      [
        rehypePrismPlus,
        {
          ignoreMissing: true,
          showLineNumbers: true,
        },
      ],
    ],
  },
})

export default withMDX(nextConfig)
