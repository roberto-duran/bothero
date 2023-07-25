'use client'

import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/hooks/useScroll'

export default function NavBar () {
  const scrolled = useScroll(50)

  return (
    <div
      className={`fixed top-0 flex w-full justify-between ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30 transition-all`}
    >
      <div className='mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between'>
        <Link href='/' className='font-display flex items-center text-2xl'>
          <Image
            src='/bothero.png'
            alt='Precedent logo'
            width='30'
            height='30'
            className='mr-2 rounded-sm'
          ></Image>
          <p className='text-gray-800 font-semibold'>BotHero</p>
        </Link>
      </div>

      <div>hola</div>
      <div>hola</div>
    </div>
  )
}
