import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { unstable_ViewTransition as ViewTransition } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article className="prose mx-auto my-28">
        <ViewTransition name="avatar">
          <Image
            src="/assets/avatar.jpeg"
            alt="Avatar"
            width={260}
            height={260}
            className="rounded-full h-12 w-12 md:h-16 md:w-16"
          />
        </ViewTransition>
        {children}
      </article>
    ),
    ...components,
  }
}
