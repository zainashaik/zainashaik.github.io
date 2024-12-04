'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// Example data (you'll want to replace this with real data)
const galleryImages = [
  { id: 1, src: '/gallery/IMG_5578 3.jpg', alt: 'Image 1' },
  { id: 2, src: '/gallery/Snapseed.jpg', alt: 'Image 2' },
  { id: 3, src: '/gallery/berkPinkClouds.jpg', alt: 'Image 3' },
  { id: 4, src: '/gallery/IMG_9056.jpg', alt: 'Image 4' },
  { id: 5, src: '/gallery/IMG_1530.jpg', alt: 'Image 5' },
  { id: 6, src: '/gallery/IMG_0957.jpg', alt: 'Image 6' },
  // ... more images
]

// Components that can be used in MDX files
const components = {
    Image: Image,
    // ... other components
  }

interface BlogPost {
  frontmatter: {
    title: string;
  };
  content: string;
}


const SunsetPage = () => {
  //const posts = await getPosts()
  const [viewMode, setViewMode] = useState('gallery')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)

  // Use useEffect to fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
      // Set the first post as selected when posts are loaded
      if (data.length > 0) {
        setSelectedPost(data[0])
      }
    }
    
    fetchPosts()
  }, [])

  useEffect(() => {
    const prepareMDX = async () => {
      if (selectedPost?.content) {
        const mdxSource = await serialize(selectedPost.content)
        setMdxSource(mdxSource)
      }
    }

    prepareMDX()
  }, [selectedPost])

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-pink-800 to-orange-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-left text-white">
          Sunset - What I'm Up to During the Night
        </h1>
        {/*<p className="text-white mb-8 text-left">I enjoy photographing pretty things and pretty people (which is everyone btw), collecting tidbits of the world to add to my scrap-binder (I think it's more flexible than a scrapbook), turning ramblings into writings, putting on henna at 2 am for cultural South Asian events, traveling with my friends and family, and over-accessorizing my outfits with butterflies!</p>*/}

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('gallery')}
            className={`px-4 py-2 rounded ${viewMode === 'gallery' ? 'bg-white text-purple-800' : 'bg-purple-900 text-white'}`}
          >
            Gallery
          </button>
          <button
            onClick={() => setViewMode('blog')}
            className={`px-4 py-2 rounded ${viewMode === 'blog' ? 'bg-white text-purple-800' : 'bg-purple-900 text-white'}`}
          >
            Blog
          </button>
        </div>

        {/* Gallery View */}
        {viewMode === 'gallery' && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 pb-24">
            {galleryImages.map((image) => (
              <div key={image.id} className="break-inside-avoid">
                <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg"
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog View */}
        {viewMode === 'blog' && (
          <div className="flex gap-8">
            {/* Blog List - Left Side */}
            <div className="w-1/5 space-y-4">
              {posts?.map((post: BlogPost) => (
                <button
                  key={post.frontmatter.title}
                  onClick={() => setSelectedPost(post)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedPost?.frontmatter.title === post.frontmatter.title
                      ? 'bg-white/20 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  {post.frontmatter.title}
                </button>
              ))}
            </div>

            {/* Blog Content - Right Side */}
            {selectedPost ? (
              <div className="w-4/5 bg-white/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">{selectedPost.frontmatter.title}</h2>
                <div className="prose prose-invert max-w-none white-bullets">
                  {mdxSource && (
                    <MDXRemote 
                      {...mdxSource}
                      components={components} 
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="w-4/5 bg-white/10 p-6 rounded-lg">
                <p className="text-white">Select a post to read</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default SunsetPage
