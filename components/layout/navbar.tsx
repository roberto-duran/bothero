'use client'

import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/hooks/useScroll'
import { BsWhatsapp } from 'react-icons/bs'

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
      <div className='mx-5 flex h-16 w-full items-center justify-between'>
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
        {/* menu */}
        <div className='text-black'>
          <ul className='flex flex-row gap-5'>
            <li className='navbar-menu'>
              <a href='#about'>About</a>
            </li>
            <li className='navbar-menu'>
              <a href='#features'>Features</a>
            </li>
          </ul>
        </div>

        {/* actions */}
        <div>
          <Link
            className='flex items-center justify-center rounded-full 
      bg-[#25d366] p-2 text-white transition-colors duration-500
       hover:bg-white  hover:text-[#25d366]'
            href='https://wa.me/573058505642'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsWhatsapp className='text-[1.1rem]' />
          </Link>
        </div>
      </div>
    </div>
  )
}
