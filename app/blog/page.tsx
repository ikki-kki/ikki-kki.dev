import { posts } from './posts'
import Post from '@/components/post'
import { generateOgImageUrl } from '@/lib/utils'
import { Metadata } from 'next'

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
    <div className="mt-20 md:mt-32 pb-20">
      <h1 className="text-2xl text-dark">Blog</h1>

      <div className="mt-12 grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}

export default Blog
