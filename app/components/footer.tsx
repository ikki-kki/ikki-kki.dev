import Github from '@/components/svg/github'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex justify-center items-center space-x-4 py-8">
      <p>1wei.dev - {currentYear}</p>
      <Link href="https://github.com/1weiho/1wei.dev" target="_blank">
        <Github />
      </Link>
    </div>
  )
}

export default Footer
