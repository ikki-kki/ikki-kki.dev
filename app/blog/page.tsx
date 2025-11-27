import * as styles from './page.css'
import { posts } from './posts'
import PostItem from '@/components/posts/postItem'
import { generateOgImageUrl } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | ikki-kki',
  description: 'Blog posts by ikki-kki.',
  openGraph: {
    title: 'Blog | ikki-kki',
    description: 'Blog posts by ikki-kki.',
    images: [{ url: generateOgImageUrl('Blog'), alt: 'ikki-kki.dev' }],
  },
}

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Blog</h1>

        <div className={styles.postList}>
          {posts.map((post) => (
            <PostItem key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
