'use client'

import * as styles from './index.css'
import { posts } from '@/app/posts/posts'
import { format } from 'date-fns'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PostHeader() {
  const pathname = usePathname()
  const slug = pathname?.split('/').filter(Boolean).pop()

  const currentPost = posts.find((post) => post.slug === slug)

  if (!currentPost) return null

  return (
    <div className={styles.container}>
      <Link href="/posts" className={styles.backButton}>
        <svg
          className={styles.backIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        돌아가기
      </Link>
      <time dateTime={currentPost.date} className={styles.date}>
        {format(new Date(currentPost.date), 'MMM d, yyyy')} •{' '}
        {currentPost.readingTime} min read
      </time>
      <h1 className={styles.title}>{currentPost.title}</h1>
    </div>
  )
}
