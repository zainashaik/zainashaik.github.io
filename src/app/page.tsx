import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4 md:px-8 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Zaina Shaik's Website</h1>
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image 
              src="/zaina1.jpg"
              alt="Sunrise Description"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          {/* Text and Links Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Sunrise - An Introduction</h2>
            <p className="text-white/90 text-base">
              Hi, it's so nice to meet you! My name is Zaina Shaik, and I graduated from <strong>UC Berkeley</strong> in <strong>May 2024</strong> with a Bachelor of Arts in <strong>Computer Science</strong> and certificates in Design and Entrepreneurship & Technology as a Regents' and Chancellor's Scholar and SEED Honors Research Scholar. I'm currently a <i>Research Software Engineer Intern</i> at the <strong>Center for AI Safety</strong> in San Francisco, CA. I'm excited about <i>Generative AI</i>, <i>Software Engineering</i>, and <i>Product Management</i>! 
            </p> 
            <p className="text-white/90 text-base">Find out more about my past work experience on the Sunshine page and my hobbies on the Sunset page!</p>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Let's Connect!</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <a 
                  href="https://www.linkedin.com/in/zainashaik/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <FaLinkedin className="text-pink-900 text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/zainashaik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <FaGithub className="text-pink-900 text-xl" />
                  <span>Github</span>
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=xGE7DHMAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <SiGooglescholar className="text-pink-900 text-xl" />
                  <span>Google Scholar</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Me:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a 
                  href="mailto:zainashaik20@gmail.com" 
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <MdEmail className="text-pink-900 text-xl" />
                  <span>zainashaik20@gmail.com</span>
                </a>
                <a 
                  href="mailto:zainashaik@berkeley.edu" 
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <MdEmail className="text-pink-900 text-xl" />
                  <span>zainashaik@berkeley.edu</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
