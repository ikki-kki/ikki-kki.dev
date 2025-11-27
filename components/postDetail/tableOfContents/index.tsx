'use client'

import { ChevronUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import * as styles from './index.css'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const tocItems: TocItem[] = []

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      let id = heading.id

      if (!id) {
        id = `heading-${index}`
        heading.id = id
      }

      tocItems.push({ id, text, level })
    })

    setToc(tocItems)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 

      let currentActiveId = ''

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        const headingTop = window.scrollY + rect.top

        if (headingTop <= scrollPosition) {
          currentActiveId = heading.id
        }
      })

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeId])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToComments = () => {
    const commentsSection =
      document.querySelector('[data-giscus]') ||
      document.querySelector('.giscus') ||
      document.querySelector('#comments')
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (toc.length === 0) return null

  return (
    <>
      <div className={styles.sidebar}>
        <nav className={styles.nav}>
          <ul>
            {toc.map((item) => (
              <li
                key={item.id}
                className={styles.tocItem}
                style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHeading(item.id)
                  }}
                  className={`${styles.tocButton} ${activeId === item.id ? styles.tocButtonVariants.active : styles.tocButtonVariants.inactive}`}
                >
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actionButtons}>
          <button onClick={scrollToTop} className={styles.actionButton} title="맨 위로">
            <ChevronUp size={18} />
          </button>
          <button onClick={scrollToComments} className={styles.actionButton} title="댓글 보기">
            <MessageCircle size={18} />
          </button>
        </div>
      </div>
    </>
  )
}
