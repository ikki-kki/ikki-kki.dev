import { Post } from '../type'
import { Tag } from 'lucide-react'
import Link from 'next/link'

const PostItem = ({ slug, title, date, tags }: Post) => {
  return (
    <Link href={`/blog/${slug}`}>
      <h3 className="text-black">{title}</h3>
      <div className="flex items-center space-x-4">
        <p className="text-xs mt-2">{date}</p>
        <div className="flex mt-2 space-x-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-amber-100 px-1.5 py-0.5 rounded-lg flex items-center"
            >
              <Tag className="h-2.5 w-2.5 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default PostItem
