import PostFooter from './components/blog/post-footer'
import TableOfContents from './components/blog/table-of-contents'
import PostHeader from './components/post-header'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from './components/ui/table'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <>
        <article className="prose break-keep max-w-[720px] mx-auto my-20 md:my-28 px-4 md:px-0">
          <PostHeader />
          {children}
          <PostFooter />
        </article>
        <TableOfContents />
      </>
    ),
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    tr: TableRow,
    th: TableHead,
    td: TableCell,
    ...components,
  }
}
