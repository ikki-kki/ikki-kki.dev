'use client'

import * as styles from './index.css'
import { posts } from '@/app/posts/posts'
import { format } from 'date-fns'
import { usePathname } from 'next/navigation'

export default function PostHeader() {
  const pathname = usePathname()
  const slug = pathname?.split('/').filter(Boolean).pop()

  const currentPost = posts.find((post) => post.slug === slug)

  if (!currentPost) return null

  return (
    <div className={styles.container}>
      <time dateTime={currentPost.date} className={styles.date}>
        {format(new Date(currentPost.date), 'MMM d, yyyy')} • {currentPost.readingTime} min read
      </time>
      <h1 className={styles.title}>{currentPost.title}</h1>
    </div>
  )
}
