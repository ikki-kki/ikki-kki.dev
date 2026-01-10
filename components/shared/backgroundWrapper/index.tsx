'use client'

import LightRay from '../lightRay'
import * as styles from './index.css'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const BackgroundWrapper = () => {
  const pathname = usePathname()
  const isBlogDetail =
    pathname.startsWith('/posts/') && pathname.split('/').length > 2
  const isResume = pathname === '/resume'

  return (
    <>
      <div
        className={cn(
          styles.animatedBackground,
          isBlogDetail && styles.animatedBackgroundHidden,
        )}
      >
        <LightRay onlyInteractive={isResume} />
      </div>
      <div
        className={cn(
          styles.staticBackground,
          isBlogDetail && styles.staticBackgroundActive,
        )}
      />
    </>
  )
}

export default BackgroundWrapper
