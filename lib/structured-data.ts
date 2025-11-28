interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
}

export function generateBlogPostJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://ikki-kki-dev.vercel.app/posts/${post.slug}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'ikki-kki',
      url: 'https://ikki-kki-dev.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ikki-kki',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ikki-kki-dev.vercel.app/opengraph-image',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ikki-kki-dev.vercel.app/posts/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    wordCount: Math.ceil(post.readingTime * 200), // 추정 단어 수
  }
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '이끼끼 블로그',
    description: 'WELCOME!',
    url: 'https://ikki-kki-dev.vercel.app',
    author: {
      '@type': 'Person',
      name: '이끼끼',
      url: 'https://ikki-kki-dev.vercel.app',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ikki-kki-dev.vercel.app/posts?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}
