'use client'

import * as styles from './index.css'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    path: '/',
    title: 'about',
  },
  {
    path: '/blog',
    title: 'posts',
  },
  {
    path: '/rss.xml',
    title: 'rss',
  },
]

const Navbar = () => {
  const currentPathname = `/${usePathname().split('/')[1]}`

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={cn(styles.link, link.path === currentPathname && styles.activeLink)}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
