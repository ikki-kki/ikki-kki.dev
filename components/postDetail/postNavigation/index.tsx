'use client'

import * as styles from './index.css'
import { Post } from '@/lib/type'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PostNavigationProps {
  prevPost?: Post
  nextPost?: Post
}

export default function PostNavigation({
  prevPost,
  nextPost,
}: PostNavigationProps) {
  return (
    <div className={styles.navigationButtons}>
      {prevPost ? (
        <Link href={`/posts/${prevPost.slug}`} className={styles.navButton}>
          <ChevronLeft size={18} />
          <span className={styles.navButtonText}>
            <span className={styles.navLabel}>이전 글</span>
            <span className={styles.navTitle}>{prevPost.title}</span>
          </span>
        </Link>
      ) : (
        <div className={styles.navButtonDisabled}>
          <ChevronLeft size={18} />
          <span className={styles.navButtonText}>
            <span className={styles.navLabel}>이전 글</span>
            <span className={styles.navTitle}>이전 글이 없습니다</span>
          </span>
        </div>
      )}

      {nextPost ? (
        <Link href={`/posts/${nextPost.slug}`} className={styles.navButton}>
          <span className={styles.navButtonText}>
            <span className={styles.navLabel}>다음 글</span>
            <span className={styles.navTitle}>{nextPost.title}</span>
          </span>
          <ChevronRight size={18} />
        </Link>
      ) : (
        <div className={styles.navButtonDisabled}>
          <span className={styles.navButtonText}>
            <span className={styles.navLabel}>다음 글</span>
            <span className={styles.navTitle}>다음 글이 없습니다</span>
          </span>
          <ChevronRight size={18} />
        </div>
      )}
    </div>
  )
}
