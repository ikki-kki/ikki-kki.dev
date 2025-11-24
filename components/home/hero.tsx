import HelloBubble from './helloBubble'
import Ikkikki from './ikkikki'
import Github from '@/components/svg/github'
import LinkedIn from '@/components/svg/linkedIn'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'
import Balancer from 'react-wrap-balancer'

const Hero = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-20 md:gap-8 md:mt-32">
        <ViewTransition name="avatar">
          <Ikkikki />
        </ViewTransition>
        <HelloBubble />
      </div>
      <h2 className="mt-8 text-xl md:mt-18 md:text-2xl text-dark">
        Welcome to my blog!
      </h2>
      <div className="mt-6 md:mt-10 max-w-[800px] text-sm md:text-base text-dark opacity-80">
        <Balancer>
          My name is Jeongmin Sung, a Frontend Engineer based in Seoul, Korea.
          <br />
          <br />
          I’m at my best when collaborating with others, performing well in team
          projects where I can share my skills and ideas.
          <br />I love creating beautiful, user-friendly designs and building
          smooth UX with React and TypeScript.
        </Balancer>
      </div>

      <div className="flex items-center gap-8 mt-8">
        <Link
          href="https://www.linkedin.com/in/jeongmin-sung-629a0120a/"
          target="_blank"
          className="flex items-center gap-2 text-sm duration-300 hover:text-dark group md:text-base"
        >
          <LinkedIn className="transition-all duration-300 opacity-100 grayscale-0 md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100" />
          LinkedIn
        </Link>

        <Link
          href="https://github.com/ikki-kki"
          target="_blank"
          className="flex items-center gap-2 text-sm duration-300 hover:text-dark group md:text-base"
        >
          <Github className="transition-all duration-300 opacity-100 grayscale-0 md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100" />
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default Hero
