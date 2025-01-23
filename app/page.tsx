import Footer from '@/components/footer'
import Geo from '@/components/home/geo'
import Hero from '@/components/home/hero'
import Projects from '@/components/home/projects'

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Geo />
      <Footer />
    </div>
  )
}
