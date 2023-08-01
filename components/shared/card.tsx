'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

export type CardProp = {
  title: string
  icon: ReactNode
  description: string
  color?: string
}

const cardItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: 'linear',
      damping: 5,
      stiffness: 50
    }
  }
}

export default function Card ({ title, description, icon, color }: CardProp) {
  const borderColor = color ? `hover:border-${color}` : 'hover:border-sky-600'
  const iconBGColor = color ? `bg-${color}/50` : 'bgsky-600/50'
  return (
    <motion.div
      variants={cardItemVariants}
      className={`default-card hover:border-2 transition-colors duration-500 ${borderColor}`}
    >
      <div
        className={`flex items-center justify-center ${iconBGColor} w-20 h-20 rounded-full mx-auto my-8`}
      >
        {icon}
      </div>
      <div className='mx-auto max-w-md text-center'>
        <h2 className='font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text font-bold text-2xl text-transparent md:font-normal'>
          {title}
        </h2>
        <div className='prose-sm md:prose -mt-2 leading-normal text-gray-500'>
          {description}
        </div>
      </div>
    </motion.div>
  )
}
