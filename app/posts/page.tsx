import * as styles from './page.css'
import { posts } from './posts'
import PostItem from '@/components/posts/postItem'
import Footer from '@/components/shared/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts | ikki-kki',
  description: 'Posts posts by ikki-kki.',
  alternates: {
    canonical: 'https://ikki-kki-dev.vercel.app/posts',
  },
  openGraph: {
    title: 'Posts | ikki-kki',
    description: 'Posts by ikki-kki.',
    url: 'https://ikki-kki-dev.vercel.app/posts',
    images: [{ url: '/images/og-posts.png', alt: 'ikki-kki.dev' }],
  },
}

const Posts = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Posts</h1>

          <div className={styles.postList}>
            {posts.map((post) => (
              <PostItem key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Posts
