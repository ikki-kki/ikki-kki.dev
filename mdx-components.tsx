import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <div className="my-40 max-w-[800px] mx-auto">
        <article className="prose mx-auto">
          <Image
            src="/assets/avatar.jpeg"
            alt="Avatar"
            width={260}
            height={260}
            className="rounded-full h-12 w-12 md:h-16 md:w-16"
          />
          {children}
        </article>
      </div>
    ),
    ...components,
  }
}
