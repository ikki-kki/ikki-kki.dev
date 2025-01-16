import Post from './components/post'
import { posts } from './posts'
import { generateOgImageUrl } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Yiwei Ho',
  description: 'Blog posts by Yiwei Ho.',
  openGraph: {
    title: 'Blog | Yiwei Ho',
    description: 'Blog posts by Yiwei Ho.',
    images: [{ url: generateOgImageUrl('Blog'), alt: '1wei.dev' }],
  },
}

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl text-black">Blog</h1>

      <div className="mt-12">
        {posts.map((post) => (
          <Post key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}

export default Blog
