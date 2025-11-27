'use client'

import * as styles from './index.css'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import LightRay from '../lightRay'
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
      {!isBlogDetail && (
        <div className={styles.animatedBackground}>
          <LightRay />
        </div>
      )}
      <div className={cn(styles.staticBackground, isBlogDetail && styles.staticBackgroundActive)} />
    </>
  )
}

export default BackgroundWrapper
