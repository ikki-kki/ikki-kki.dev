'use client'

import * as styles from './index.css'
import { useEffect, useRef, useState } from 'react'

interface GiscusCommentsProps {
  repo: string
  repoId: string
  category: string
  categoryId: string
  mapping?: string
  term?: string
  theme?: string
  lang?: string
  loading?: 'lazy' | 'eager'
}

export default function GiscusComments({
  repo,
  repoId,
  category,
  categoryId,
  mapping = 'pathname',
  term = '',
  theme = 'light',
  lang = 'ko',
  loading = 'lazy',
}: GiscusCommentsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || !ref.current) return

    // Clear any existing giscus content
    const container = ref.current
    container.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo)
    script.setAttribute('data-repo-id', repoId)
    script.setAttribute('data-category', category)
    script.setAttribute('data-category-id', categoryId)
    script.setAttribute('data-mapping', mapping)
    script.setAttribute('data-term', term)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', theme)
    script.setAttribute('data-lang', lang)
    script.setAttribute('data-loading', loading)
    script.crossOrigin = 'anonymous'
    script.async = true

    // Next.js 호환성을 위한 스크립트 로딩 처리
    script.onload = () => {
      // Giscus가 로드되었을 때의 처리 (필요시)
    }

    container.appendChild(script)

    // Cleanup function
    return () => {
      // 컴포넌트가 언마운트될 때 정리
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [
    isVisible,
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    term,
    theme,
    lang,
    loading,
  ])

  return (
    <div className={styles.container} data-giscus>
      <div ref={ref} className={styles.inner}>
        {!isVisible && (
          <div className={styles.loading}>
            <div className={styles.loadingText}>댓글을 불러오는 중...</div>
          </div>
        )}
      </div>
    </div>
  )
}
