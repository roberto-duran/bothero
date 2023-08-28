import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

export default function WhatsappButton () {
  return (
    <Link
      className='group flex max-w-fit items-center justify-center space-x-2 rounded-full 
      bg-[#25d366] px-5 py-2 text-sm text-white transition-colors duration-500
       hover:bg-white hover:text-[#25d366]'
      href='https://wa.me/50761369407'
      target='_blank'
      rel='noopener noreferrer'
    >
      <BsWhatsapp />
      <p>chatea con BotHeroAI</p>
    </Link>
  )
}
