import { motion, Variants } from 'framer-motion'

export type CardProp = {
  title: string
  img: string
  description: string
  header: string
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

export default function Card ({ title, description, header }: CardProp) {
  return (
    <motion.div variants={cardItemVariants} className='default-card'>
      <div className='flex items-center justify-center'>{header}</div>
      <div className='mx-auto max-w-md text-center'>
        <h2 className='font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal'>
          {title}
        </h2>
        <div className='prose-sm md:prose -mt-2 leading-normal text-gray-500'>
          {description}
        </div>
      </div>
    </motion.div>
  )
}
