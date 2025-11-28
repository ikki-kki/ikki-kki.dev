import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export const generateOgImageUrl = (title: string) => {
  const baseUrl = 'https://ikki-kki.dev/api/og'
  const encodedTitle = encodeURIComponent(title)
  return `${baseUrl}?title=${encodedTitle}`
}

export const sharePost = async () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const title = document.title
  const isMobile = 'ontouchstart' in window

  if (isMobile && navigator.share) {
    try {
      await navigator.share({
        title: title,
        url: currentUrl,
      })
    } catch (err) {
      console.error('Error sharing:', err)
    }
  } else {
    try {
      await navigator.clipboard.writeText(currentUrl)
      alert('링크가 복사되었습니다')
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
