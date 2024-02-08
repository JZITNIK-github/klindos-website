"use client";
import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import { useRouter } from 'next/router'

import Header from '@/components/ui/header'
import { useEffect } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (window.location.hostname == "klindos.jzitnik.is-a.dev") {
      const url = new URL(window.location.href);
      url.hostname = "klindos.jzitnik.dev";
      window.location.replace(url.href);
    }
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 
