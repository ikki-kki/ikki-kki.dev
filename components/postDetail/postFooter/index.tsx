'use client'

import GiscusComments from '../giscusComments'
import RssSubscribe from '../rssSubscribe'
import ShareButtons from '../shareButtons'
import { posts } from '@/app/blog/posts'
import { usePathname } from 'next/navigation'
import * as styles from './index.css'

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
    <div className={styles.container}>
      {/* Share and Subscribe Section */}
      <div className={styles.actionsSection}>
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
