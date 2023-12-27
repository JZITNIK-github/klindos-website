export const metadata = {
  title: 'Changelog - KLIND OS',
  description: 'Poslední změny v KLIND OS',
}

import Branches from '@/components/changelog/branches'

export default function Home() {
  return (
    <>
      <Branches />
    </>
  )
}
