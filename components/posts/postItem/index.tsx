import * as styles from './index.css'
import type { Post } from '@/lib/type'
import Link from 'next/link'

const PostItem = ({ slug, title, description, tags, date }: Post) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className={styles.link}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <time className={styles.date}>{date}</time>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.tagContainer}>
        {tags?.map((tag) => (
          <span
            key={tag}
            className={styles.tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default PostItem
