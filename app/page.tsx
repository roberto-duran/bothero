import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/features/Features'

export default async function Home () {
  return (
    <div className='flex flex-col'>
      <Hero />
      <About />
      <Features />
    </div>
  )
}
