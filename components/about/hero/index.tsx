import HelloBubble from '../helloBubble'
import Ikkikki from '../ikkikki'
import * as styles from './index.css'
import Github from '@/components/svg/github'
import LinkedIn from '@/components/svg/linkedIn'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'
import Balancer from 'react-wrap-balancer'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarRow}>
        <ViewTransition name="avatar">
          <Ikkikki />
        </ViewTransition>
        <HelloBubble />
      </div>
      <h2 className={styles.heading}>Welcome to my blog!</h2>
      <div className={styles.description}>
        <Balancer>
          My name is Jeongmin Sung, a Frontend Engineer based in Seoul, Korea.
          <br />
          <br />
          I&apos;m at my best when collaborating with others, performing well in team
          projects where I can share my skills and ideas.
          <br />I love creating beautiful, user-friendly designs and building
          smooth UX with React and TypeScript.
        </Balancer>
      </div>

      <div className={styles.socialLinks}>
        <Link
          href="https://www.linkedin.com/in/jeongmin-sung-629a0120a/"
          target="_blank"
          className={styles.socialLink}
        >
          <LinkedIn className={styles.socialIcon} />
          LinkedIn
        </Link>

        <Link
          href="https://github.com/ikki-kki"
          target="_blank"
          className={styles.socialLink}
        >
          <Github className={styles.socialIcon} />
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default Hero
