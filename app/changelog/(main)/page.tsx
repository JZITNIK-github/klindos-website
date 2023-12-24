export const metadata = {
  title: 'Changelog - KLIND OS',
  description: 'Zde si můžete stáhnout KLIND OS',
}

import Branches from '@/components/changelog/branches'

export default function Home() {
  return (
    <>
      <Branches />
    </>
  )
}
