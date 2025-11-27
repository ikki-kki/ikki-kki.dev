'use client'

import { posts } from '@/app/blog/posts'
import { format } from 'date-fns'
import { usePathname } from 'next/navigation'
import * as styles from './index.css'

export default function PostHeader() {
  const pathname = usePathname()
  const slug = pathname?.split('/').filter(Boolean).pop()

  const currentPost = posts.find((post) => post.slug === slug)

  if (!currentPost) return null

  return (
    <div className={styles.container}>
      <time dateTime={currentPost.date}>
        {format(new Date(currentPost.date), 'MMM d, yyyy')}
      </time>
      <h1 className={styles.title}>{currentPost.title}</h1>
    </div>
  )
}
