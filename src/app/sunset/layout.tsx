import { getAllPosts } from '@/lib/mdx'
import { ReactNode } from 'react'
import '@/app/globals.css'

export default async function SunsetLayout({ children }: { children: ReactNode }) {
  try {
    const posts = await getAllPosts()
    //console.log(posts)
    
    return children
  } catch (error) {
    console.error("Error fetching posts:", error)
  }
} 