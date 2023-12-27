export const metadata = {
  title: 'Blog - KLIND OS',
  description: 'Blog KLIND OS',
}

import Hero from '@/components/blog/hero'
import BlogPosts from '@/components/blog/blogposts'

export default function Home() {
  return (
    <>
      <Hero />
      <BlogPosts />
    </>
  )
}
