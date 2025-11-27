import * as styles from './mdx-components.css'
import PostFooter from './components/postDetail/postFooter'
import TableOfContents from './components/postDetail/tableOfContents'
import PostHeader from './components/postDetail/postHeader'
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
        <article className={`prose ${styles.articleWrapper}`}>
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
