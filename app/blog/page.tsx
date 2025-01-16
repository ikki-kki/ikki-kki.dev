import Post from './components/post'
import { posts } from './posts'

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
