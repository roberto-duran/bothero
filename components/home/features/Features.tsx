'use client'

import React from 'react'
import Card, { CardProp } from '@/components/shared/card'
import { motion, Variants } from 'framer-motion'
import { BsChatSquareDotsFill } from 'react-icons/bs'

const features: CardProp[] = [
  {
    title: 'Pregunta lo que quieras',
    icon: <BsChatSquareDotsFill size='40' />,
    description: 'description',
    color: 'sky-600'
  },
  {
    title: 'title2',
    icon: 'icon',
    description: 'description',
    color: 'lime-500'
  },
  {
    title: 'title3',
    icon: 'icon',
    description: 'description',
    color: 'amber-600'
  },
  {
    title: 'title4',
    icon: 'icon',
    description: 'description',
    color: 'rose-400'
  },
  {
    title: 'title5',
    icon: 'icon',
    description: 'description',
    color: 'fuchsia-700'
  },
  {
    title: 'title6',
    icon: 'icon',
    description: 'description',
    color: 'pink-600'
  }
]

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0.2 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4
    }
  }
}

export default function Features () {
  return (
    <section className='z-10 my-10' id='features'>
      <h1 className='header-title animate-fade-up font-display mb-10'>
        Features
      </h1>
      <motion.div
        variants={cardsContainerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.8 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'
      >
        {features.map(feature => (
          <Card
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </motion.div>
    </section>
  )
}
