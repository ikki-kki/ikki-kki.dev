import * as styles from './index.css'
import Github from '@/components/svg/github'
import Link from 'next/link'

interface FooterProps {
  fixed?: boolean
}

const Footer = ({ fixed = false }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer} data-position-fixed={fixed}>
      <p>ikki-kki.dev - {currentYear}</p>
      <Link href="https://github.com/ikki-kki/ikki-kki.dev" target="_blank">
        <Github />
      </Link>
    </div>
  )
}

export default Footer
