export const metadata = {
  title: 'Blog - KLIND OS',
  description: 'Zde si můžete stáhnout KLIND OS',
}

import Changes from '@/components/changelog/changes'

export default function Home() {
  return (
    <>
      <Changes />
    </>
  )
}
