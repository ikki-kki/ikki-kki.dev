'use client'

import { ChevronUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // 페이지의 제목들(h1, h2, h3)을 수집
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const tocItems: TocItem[] = []

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      let id = heading.id

      // ID가 없으면 생성
      if (!id) {
        id = `heading-${index}`
        heading.id = id
      }

      tocItems.push({ id, text, level })
    })

    setToc(tocItems)

    // 스크롤 기반 활성 섹션 추적 (더 정확함)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // 헤더 오프셋 고려

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

    // 초기 실행
    handleScroll()

    // 스크롤 이벤트 리스너 등록
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
      {/* 사이드바 목차 - 아티클과 정확히 같은 위치에서 시작 */}
      <div className="fixed left-[calc(50%+32rem)] top-46 h-[calc(100vh-8rem)] w-64 hidden xl:flex xl:flex-col">
        <nav className="space-y-0 border-l border-green-200 pl-4 flex-1">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`relative flex items-center w-full text-left text-xs py-0.5 transition-all duration-200 group ${
                activeId === item.id
                  ? 'text-green-900'
                  : 'text-green-500 hover:text-green-700'
              }`}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              {/* 활성 상태 표시 점 - 보더 라인 위에 위치 */}
              <div
                className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  activeId === item.id
                    ? 'bg-green-600'
                    : 'bg-transparent group-hover:bg-green-300'
                }`}
                style={{ left: '-16px', transform: 'translateX(-50%)' }}
              />
              <span className="leading-tight">{item.text}</span>
            </button>
          ))}
        </nav>
        
        {/* 목차 하단의 네비게이션 버튼들 */}
        <div className="border-l border-green-200 pl-4 pt-4 flex flex-col gap-2">
          <button
            onClick={scrollToComments}
            className="flex items-center gap-2 text-xs text-green-600 hover:text-green-800 transition-colors duration-200 group"
            aria-label="댓글로 가기"
          >
            <MessageCircle className="h-3 w-3" />
            <span className="opacity-70 group-hover:opacity-100">댓글</span>
          </button>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-green-600 hover:text-green-800 transition-colors duration-200 group"
            aria-label="맨 위로 가기"
          >
            <ChevronUp className="h-3 w-3" />
            <span className="opacity-70 group-hover:opacity-100">맨 위로</span>
          </button>
        </div>
      </div>
    </>
  )
}
