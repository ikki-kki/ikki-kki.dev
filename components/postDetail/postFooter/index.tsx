'use client'

import Footer from '@/components/shared/footer'
import GiscusComments from '../giscusComments'
import * as styles from './index.css'

export default function PostFooter() {

  return (
    <div className={styles.container}>
      <GiscusComments
        repo="ikki-kki/ikki-kki.dev"
        repoId="R_kgDOOpzBDA"
        category="Comments"
        categoryId="DIC_kwDOOpzBDM4CxuAP"
        mapping="pathname"
        theme="preferred_color_scheme"
        lang="ko"
        loading="lazy"
      />
<Footer />
    </div>
  )
}
