'use client'

import { usePathname } from 'next/navigation'
import LightRay from './light-ray'
import { useEffect, useState } from 'react'

const BackgroundWrapper = () => {
  const pathname = usePathname()
  const [isBlogDetail, setIsBlogDetail] = useState(false)

  useEffect(() => {
    const isDetail = pathname.startsWith('/blog/') && pathname.split('/').length > 2
    setIsBlogDetail(isDetail)
  }, [pathname])

  return (
    <>
      <style jsx global>{`
        .background-static {
          position: fixed;
          inset: 0;
          background: var(--background);
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          pointer-events: none;
        }

        .background-static.active {
          opacity: 1;
        }

        .background-animated {
          position: fixed;
          inset: 0;
          opacity: 1;
          transition: opacity 0.6s ease-in-out;
        }

        .background-animated.hidden {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
      
      {!isBlogDetail && (
        <div className="background-animated">
          <LightRay />
        </div>
      )}
      <div className={`background-static ${isBlogDetail ? 'active' : ''}`} />
    </>
  )
}

export default BackgroundWrapper
