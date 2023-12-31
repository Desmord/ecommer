import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import GlobalState from '@/components/GlobalState/GlobalState'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce shop',
  description: 'Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main className='flex min-h-screen flex-col mt-28 md:mt-20'>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
