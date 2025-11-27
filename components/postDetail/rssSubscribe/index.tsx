'use client'

import { Rss } from 'lucide-react'
import * as styles from './index.css'

interface RssSubscribeProps {
  className?: string
}

export default function RssSubscribe({ className = '' }: RssSubscribeProps) {
  const rssUrl = '/rss.xml'

  return (
    <div className={`${styles.container} ${className}`}>


      <div className={styles.buttonWrapper}>
        <a
          href={rssUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="RSS 피드 구독하기"
        >
          <Rss className={styles.icon} />
          <span className={styles.linkText}>RSS 구독</span>
        </a>
      </div>
    </div>
  )
}
