export const metadata = {
  title: 'Blog - KLIND OS',
  description: 'Poslední změny v KLIND OS',
}

import Changes from '@/components/changelog/changes'

export default function Home() {
  return (
    <>
      <Changes />
    </>
  )
}
