'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/hooks/useScroll'
import { BsWhatsapp } from 'react-icons/bs'
import WhatsappButton from '../shared/WhatsappButton'
import { m } from 'framer-motion'
import { link } from 'fs'

type MenuItem = {
  name: string
  link: string
  handler: () => void
}

export default function NavBar () {
  const scrolled = useScroll(50)
  const [showMenu, setMenuState] = useState(false)

  const handleToggle = () => {
    setMenuState(!showMenu)
  }

  const handleClick = () => {
    setMenuState(false)
  }

  const menuItems: MenuItem[] = [
    {
      name: 'About',
      link: '#about',
      handler: handleClick
    },
    {
      name: 'Que puedo hacer',
      link: '#features',
      handler: handleClick
    }
  ]

  return (
    <nav
      className={`fixed top-0 flex w-full justify-between ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30`}
    >
      <div className='mx-5 flex h-16 w-full items-center justify-between'>
        <Link href='/' className='font-display flex items-center text-2xl'>
          <Image
            src='/botheroai.png'
            alt='Precedent logo'
            width='30'
            height='30'
            className='mr-2 rounded-sm'
          ></Image>
          <p className='text-gray-700 font-semibold'>BotHeroAI</p>
        </Link>
        {/* menu */}
        <div className='hidden text-gray-700 md:block'>
          <ul className='flex flex-row gap-5'>
            {menuItems.map(item => (
              <li className='navbar-menu' key={item.name}>
                <a href={item.link} onClick={item.handler}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* actions */}
        <div className='hidden md:block'>
          <Link
            className='flex items-center justify-center rounded-full 
      bg-[#25d366] p-2 text-white transition-colors duration-500
       hover:bg-white  hover:text-[#25d366]'
            href='https://wa.me/50761369407'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsWhatsapp className='text-[1.1rem]' />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          id='menu-btn'
          onClick={handleToggle}
          className={`block md:hidden ${
            showMenu ? 'open' : ''
          } hamburger lg:hidden focus:outline-none`}
          type='button'
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      {/* mobile menu */}
      <div
        id='menu'
        className={`absolute md:hidden ${
          showMenu ? 'flex' : 'hidden'
        } p-6 rounded-lg bg-white/95 left-6 right-6 top-20 z-100`}
      >
        <div
          className='flex flex-col items-center justify center w-full space-y-6 
        font-bold text-white rounded-sm'
        >
          <ul className='flex flex-col items-center gap-4 text-gray-700/80'>
            {menuItems.map(item => (
              <li className='navbar-menu' key={item.name}>
                <a href={item.link} onClick={item.handler}>
                  {item.name}
                </a>
              </li>
            ))}
            <li className=''>
              <WhatsappButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
