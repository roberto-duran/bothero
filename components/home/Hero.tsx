import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

export default function Hero () {
  return (
    <section
      className='flex justify-center items-center z-10 w-full px-5 xl:px-0 h-[calc(100vh-7rem)]'
      id='hero'
    >
      <div>
        <h1
          className='header-title animate-fade-up font-display'
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          BotHeroAI <br />
        </h1>
        <h3
          className='animate-fade-up font-display bg-gradient-to-br
   from-black to-stone-500 bg-clip-text text-center text-xl 
   font-bold tracking-[-0.02em] text-transparent opacity-95 drop-shadow-sm md:text-2xl 
   md:leading-[2rem]'
        >
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
            <p>chat con BotHeroAI</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
