import { posts } from '../blog/posts'

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case "'":
        return '&apos;'
      case '"':
        return '&quot;'
    }
    return c
  })
}

export async function GET() {
  const siteUrl = 'https://ikki-kki.dev'
  const blogTitle = 'ikki-kki Blog'
  const blogDescription = 'Blog posts by ikki-kki'
  const author = 'ikki-kki'

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(blogTitle)}</title>
    <description>${escapeXml(blogDescription)}</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>ikki.dev.blog@gmail.com (${author})</managingEditor>
    <webMaster>ikki.dev.blog@gmail.com (${author})</webMaster>
    <generator>Next.js</generator>
    <ttl>60</ttl>
    ${posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post) => {
        const postUrl = `${siteUrl}/blog/${post.slug}`
        const pubDate = new Date(post.date).toUTCString()

        return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>ikki.dev.blog@gmail.com (${author})</author>
      ${post.tags?.map((tag) => `<category>${escapeXml(tag)}</category>`).join('') || ''}
    </item>`
      })
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
    },
  })
}
