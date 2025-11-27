import { Post } from '@/lib/type'
import Link from 'next/link'

const PostItem = ({ slug, title, description, tags }: Post) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block py-6 border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-150"
    >
      <h3 className="text-dark font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex space-x-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default PostItem
