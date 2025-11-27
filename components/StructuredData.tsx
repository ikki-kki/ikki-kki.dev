import { generateBlogPostJsonLd } from '@/lib/structured-data'

interface StructuredDataProps {
  post: {
    slug: string
    title: string
    description: string
    date: string
    tags: string[]
    readingTime: number
  }
}

export default function StructuredData({ post }: StructuredDataProps) {
  const jsonLd = generateBlogPostJsonLd(post)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}