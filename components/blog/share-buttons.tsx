'use client'

import { Share, Check } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  url?: string
  description?: string
}

export default function ShareButtons({
  title,
  url,
  description,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const currentUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleShare = async () => {
    // Web Share API 지원 확인 (주로 모바일)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description || title,
          url: currentUrl,
        })
      } catch (err) {
        console.error('Error sharing:', err)
        // 사용자가 공유를 취소한 경우 등에는 아무것도 하지 않음
      }
    } else {
      // Web Share API 미지원 시 링크 복사 (주로 데스크톱)
      try {
        await navigator.clipboard.writeText(currentUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy link:', err)
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = currentUrl
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (fallbackErr) {
          console.error('Fallback copy failed:', fallbackErr)
        }
        document.body.removeChild(textArea)
      }
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
          copied
            ? 'bg-green-50 text-green-600'
            : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
        }`}
        aria-label="공유하기"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            <span>복사됨!</span>
          </>
        ) : (
          <>
            <Share className="h-4 w-4" />
            <span>공유하기</span>
          </>
        )}
      </button>
    </div>
  )
}
