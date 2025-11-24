'use client'

import GiscusComments from './giscus-comments'
import RssSubscribe from './rss-subscribe'
import ShareButtons from './share-buttons'
import { posts } from '@/app/blog/posts'
import { usePathname } from 'next/navigation'

interface PostFooterProps {
  title?: string
  description?: string
  url?: string
}

export default function PostFooter({
  title,
  description,
  url,
}: PostFooterProps) {
  const pathname = usePathname()
  const slug = pathname?.split('/').filter(Boolean).pop()

  const currentPost = posts.find((post) => post.slug === slug)

  // Use props if provided, otherwise fall back to current post data
  const postTitle = title || currentPost?.title || 'Blog Post'
  const postDescription = description || currentPost?.description || ''
  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      {/* Share and Subscribe Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <ShareButtons
          title={postTitle}
          description={postDescription}
          url={url}
        />
        <RssSubscribe />
      </div>

      {/* Comments Section */}
      <GiscusComments
        repo="ikki-kki/ikki-kki.dev"
        repoId="R_kgDOOpzBDA"
        category="Comments"
        categoryId="DIC_kwDOOpzBDM4CxuAP"
        mapping="pathname"
        theme="preferred_color_scheme"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
