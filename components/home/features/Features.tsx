'use client'

import React from 'react'
import Card, { CardProp } from '@/components/shared/card'
import { motion, Variants } from 'framer-motion'

const features: CardProp[] = [
  {
    title: 'title1',
    img: 'img',
    description: 'description',
    header: 'header'
  },
  {
    title: 'title2',
    img: 'img',
    description: 'description',
    header: 'header'
  },
  {
    title: 'title3',
    img: 'img',
    description: 'description',
    header: 'header'
  },
  {
    title: 'title4',
    img: 'img',
    description: 'description',
    header: 'header'
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
            header={feature.header}
            img={feature.img}
          />
        ))}
      </motion.div>
    </section>
  )
}
