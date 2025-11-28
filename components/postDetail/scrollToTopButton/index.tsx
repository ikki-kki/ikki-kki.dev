import * as styles from './index.css'
import { scrollToTop } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTopButton() {
  return (
    <button
      onClick={scrollToTop}
      className={styles.scrollToTopButton}
      title="맨 위로"
    >
      <ChevronUp size={18} />맨 위로
    </button>
  )
}
