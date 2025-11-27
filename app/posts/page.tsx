import * as styles from './page.css'
import { posts } from './posts'
import PostItem from '@/components/posts/postItem'
import Footer from '@/components/shared/footer'
import { generateOgImageUrl } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts | ikki-kki',
  description: 'Posts posts by ikki-kki.',
  openGraph: {
    title: 'Posts | ikki-kki',
    description: 'Posts by ikki-kki.',
    images: [{ url: generateOgImageUrl('Posts'), alt: 'ikki-kki.dev' }],
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
