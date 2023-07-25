import { BsFillHeartFill } from 'react-icons/bs'

export default function Footer () {
  return (
    <div className='w-full border-b border-gray-200 bg-white/80 py-5 backdrop-blur-xl transition-all'>
      <p className='flex flex-col items-center text-gray-500 text-right sm:flex-row sm:justify-center'>
        Made with{' '}
        <span className='text-red-500 mx-2'>
          <BsFillHeartFill />
        </span>
        <a
          className='font-medium text-gray-800 underline transition-colors'
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >
          In Panama
        </a>
      </p>
    </div>
  )
}
