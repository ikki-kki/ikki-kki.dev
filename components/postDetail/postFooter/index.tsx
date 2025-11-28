'use client'

import GiscusComments from '../giscusComments'
import PostNavigation from '../postNavigation'
import ScrollToTopButton from '../scrollToTopButton'
import ShareButton from '../shareButton'
import * as styles from './index.css'
import { posts } from '@/app/posts/posts'
import Footer from '@/components/shared/footer'
import { usePathname } from 'next/navigation'

export default function PostFooter() {
  const pathname = usePathname()
  const currentSlug = pathname?.split('/').pop() || ''

  const currentPost = posts.find((post) => post.slug === currentSlug)
  const prevPost = currentPost?.prevSlug
    ? posts.find((post) => post.slug === currentPost.prevSlug)
    : undefined
  const nextPost = currentPost?.nextSlug
    ? posts.find((post) => post.slug === currentPost.nextSlug)
    : undefined

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.buttonWrapper}>
          <ShareButton />
          <ScrollToTopButton />
        </div>

        <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      </div>

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

      <Footer />
    </div>
  )
}
