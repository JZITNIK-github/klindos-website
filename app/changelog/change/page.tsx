export const metadata = {
  title: 'Blog - KLIND OS',
  description: 'Poslední změny v KLIND OS',
}

import Change from '@/components/changelog/change'

export default function Home() {
  return (
    <>
      <Change />
    </>
  )
}
