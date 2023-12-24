export const metadata = {
  title: 'Blog - KLIND OS',
  description: 'Zde si můžete stáhnout KLIND OS',
}

import Change from '@/components/changelog/change'

export default function Home() {
  return (
    <>
      <Change />
    </>
  )
}
