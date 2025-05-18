import Github from '@/components/svg/github'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="fixed bottom-0 left-0 flex items-center justify-center w-full py-8 space-x-4 text-sm md:text-base">
      <p>ikki-kki.dev - {currentYear}</p>
      <Link href="https://github.com/ikki-kki/ikki-kki.dev" target="_blank">
        <Github />
      </Link>
    </div>
  )
}

export default Footer
