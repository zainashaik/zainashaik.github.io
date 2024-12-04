import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  const files = fs.readdirSync(postsDirectory)

  return files.map((fileName) => {
    const slug = fileName.replace('.mdx', '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontmatter, content } = matter(fileContents)

    return {
      slug,
      frontmatter,
      content
    }
  })
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)

  return {
    frontmatter,
    content
  }
} 