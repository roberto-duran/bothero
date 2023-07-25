import { type } from 'os'
import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  header: ReactNode
  large?: boolean
}

export default function Card ({ title, description, header, large }: Props) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className='flex h-60 items-center justify-center'>{header}</div>
      <div className='mx-auto max-w-md text-center'>
        <h2 className='font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-3xl md:font-normal'>
          {title}
        </h2>
        <div className='prose-sm md:prose -mt-2 leading-normal text-gray-500'>
          {description}
        </div>
      </div>
    </div>
  )
}
