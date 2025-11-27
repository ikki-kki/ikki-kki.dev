import * as styles from './index.css'
import Github from '@/components/svg/github'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      <p>ikki-kki.dev - {currentYear}</p>
      <Link href="https://github.com/ikki-kki/ikki-kki.dev" target="_blank">
        <Github />
      </Link>
    </div>
  )
}

export default Footer
