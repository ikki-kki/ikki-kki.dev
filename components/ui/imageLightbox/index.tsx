'use client'

import type { ImageProps } from 'next/image'
import NextImage from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import * as styles from './index.css'

function getImageSrc(src: ImageProps['src']): string {
  if (typeof src === 'string') return src
  if ('src' in src) return src.src
  return (src as { default: { src: string } }).default?.src ?? ''
}

const Image = (props: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleClose])

  return (
    <>
      <button
        type="button"
        className={styles.thumbnail}
        onClick={() => setIsOpen(true)}
        aria-label="이미지 크게 보기"
      >
        <NextImage {...props} className={styles.thumbnailImage} />
      </button>

      {mounted &&
        isOpen &&
        createPortal(
          <>
            <div
              className={styles.backdrop}
              onClick={handleClose}
              onKeyDown={(e) => e.key === 'Escape' && handleClose()}
              role="button"
              tabIndex={0}
              aria-label="닫기"
            />
            <div
              className={styles.imageWrapper}
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImageSrc(props.src)}
                  alt={props.alt ?? ''}
                  className={styles.lightboxImage}
                />
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  )
}

export default Image
