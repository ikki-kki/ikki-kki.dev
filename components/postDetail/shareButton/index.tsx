'use client'

import * as styles from './index.css'
import { sharePost } from '@/lib/utils'
import { Share2 } from 'lucide-react'

export default function ShareButton() {
  return (
    <button onClick={sharePost} className={styles.shareButton} title="공유하기">
      <Share2 size={18} />
      공유하기
    </button>
  )
}
