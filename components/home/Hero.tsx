import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import WhatsappButton from '../shared/WhatsappButton'

export default function Hero () {
  return (
    <section
      className='flex justify-center items-baseline mx-1 md:mx-0 px-0 md:px-5 xl:px-0'
      id='hero'
    >
      <div className='bg-gray-800/30 p-8 md:p-14 rounded-xl w-full gradient'>
        <div className='flex flex-col justify-between items-center md:flex-row gap-10'>
          <div className='flex flex-col items-center justify-center'>
            <h1
              className='text-2xl md:text-4xl font-bold text-gray-700'
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              Tu Asistente inteligente <br />
            </h1>
            <h3 className='text-lg text-gray-500 font-bold max-w-[100rem]'>
              Tu asistente personal de WhatsApp, siempre disponible y listo para
              ayudarte.
            </h3>

            <div
              className='animate-fade-up mx-auto mt-6 flex items-center justify-center space-x-5 opacity-95'
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <WhatsappButton />
            </div>
          </div>

          <div className='relative h-[500px] w-[257px] lg:h-[647px] lg:w-[326px]'>
            <Image
              src='/whatsapp-bothero.png'
              alt='whatsapp bothero'
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
