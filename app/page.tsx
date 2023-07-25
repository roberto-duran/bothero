import Image from 'next/image'
import Card from '@/components/shared/card'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

export default async function Home () {
  return (
    <>
      <div className='z-10 w-full max-w-xl px-5 xl:px-0'>
        <h1
          className='animate-fade-up font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-95 drop-shadow-sm md:text-7xl md:leading-[5rem]'
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          Bothero <br />
        </h1>
        <h3
          className='animate-fade-up font-display bg-gradient-to-br
         from-black to-stone-500 bg-clip-text text-center text-2xl 
         font-bold tracking-[-0.02em] text-transparent opacity-95 drop-shadow-sm md:text-4xl 
         md:leading-[5rem]'
        >
          tu asistente de whatsapp
        </h3>
        <p
          className='animate-fade-up mt-6 text-center text-gray-500 opacity-0 md:text-xl'
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          An opinionated collection of components, hooks, and utilities for your
          Next.js project.
        </p>
        <div
          className='animate-fade-up mx-auto mt-6 flex items-center justify-center space-x-5 opacity-95'
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <Link
            className='group flex max-w-fit items-center justify-center space-x-2 rounded-full 
            bg-[#25d366] px-5 py-2 text-sm text-white transition-colors
             hover:bg-white hover:text-[#25d366]'
            href='https://wa.me/573058505642'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsWhatsapp />
            <p>chat con bothero</p>
          </Link>
        </div>
      </div>
      <div className='animate-fade-up my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0'>
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={title === 'Beautiful, reusable components' ? 'hola' : demo}
            large={large}
          />
        ))}
      </div>
    </>
  )
}

const features = [
  {
    title: 'Beautiful, reusable components',
    description:
      'Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)',
    large: true,
    demo: <div className='text-green-700n'>hola</div>
  }
]
