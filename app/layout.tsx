import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/layout/footer'
import NavBar from '@/components/layout/navbar'
import { Analytics } from '@vercel/analytics/react'

const poppings = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Bothero',
  description: 'tu asistente de whatsapp',
  themeColor: '#FFF'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={poppings.className}>
        <div className='fixed h-screen w-full bg-gradient-to-br from-[#99a9dd] via-white to-[#71d5a6]' />
        <NavBar />
        <main className='flex min-h-screen w-full flex-col items-center justify-center py-32'>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
