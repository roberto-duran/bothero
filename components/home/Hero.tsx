import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero () {
  return (
    <section
      className='flex justify-center items-baseline mx-1 md:mx-0 px-0 md:px-5 xl:px-0'
      id='hero'
    >
      <div className='bg-gray-800/30 p-8 md:p-14 rounded-xl w-full gradient'>
        <div className='flex flex-col justify-between items-center md:flex-row gap-10'>
          <div>
            <h1
              className='text-2xl md:text-4xl font-bold text-gray-700'
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              Tu Asistente inteligente <br />
            </h1>
            <h3 className='text-lg text-gray-500 font-bold'>
              Tu asistente personal de WhatsApp, siempre disponible y listo para
              ayudarte.
            </h3>

            <div
              className='animate-fade-up mx-auto mt-6 flex items-center justify-center space-x-5 opacity-95'
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
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
            </div>
          </div>

          <div>
            <Image
              src='/whatsapp-bothero.png'
              alt='whatsapp bothero'
              width={326}
              height={647}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
