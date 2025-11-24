'use client'

import { Rss } from 'lucide-react'

interface RssSubscribeProps {
  className?: string
}

export default function RssSubscribe({ className = '' }: RssSubscribeProps) {
  const rssUrl = '/rss.xml'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <Rss className="h-4 w-4" />
        <span>구독하기</span>
      </div>

      <div className="flex items-center gap-2">
        {/* RSS Feed */}
        <a
          href={rssUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-lg transition-colors duration-200"
          aria-label="RSS 피드 구독하기"
        >
          <Rss className="h-4 w-4" />
          <span className="hidden sm:inline">RSS 구독</span>
        </a>
      </div>
    </div>
  )
}
