export const metadata = {
  title: 'Domov - KLIND OS',
  description: 'KLIND OS je Arch Linux distribuce s GUI napsaným v JavaScriptu',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Download from '@/components/download'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Download />
    </>
  )
}
