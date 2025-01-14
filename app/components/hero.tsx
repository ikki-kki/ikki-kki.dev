import Github from '@/components/svg/github'
import X from '@/components/svg/x'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

const Hero = () => {
  return (
    <div>
      <div className="flex items-center gap-4 md:gap-8 mt-32 md:mt-40">
        <Image
          src="/assets/avatar.jpeg"
          alt="Avatar"
          width={600}
          height={600}
          className="rounded-full h-16 w-16 md:h-24 md:w-24"
        />
        <h1 className="text-2xl md:text-3xl text-black">你好 👋</h1>
      </div>

      <h2 className="mt-8 md:mt-16 text-2xl text-black">Yi Wei Here!</h2>

      <div className="mt-10 max-w-[900px]">
        <Balancer>
          I am currently a backend engineer at Microprogram, where we have
          developed a world-class public bike-sharing system in Taiwan. I have a
          passion for exploring new front-end and back-end technologies, and I
          am deeply inspired by beautiful and innovative designs.
        </Balancer>
      </div>

      <div className="mt-8 flex gap-8 items-center">
        <Link href="https://x.com/1weiho" className="flex items-center gap-2">
          <X />
          Twitter
        </Link>

        <Link
          href="https://github.com/1weiho"
          className="flex items-center gap-2"
        >
          <Github />
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default Hero
