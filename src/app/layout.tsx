import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/navbar'

const nunito = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Food Delivery App',
  description: 'A simple food delivery app built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={nunito.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
