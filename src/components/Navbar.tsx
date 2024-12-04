'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Dynamic gradient based on current page
  const getGradientClass = () => {
    switch (pathname) {
      case '/':
        return 'bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400' // Lighter for Sunrise
      case '/sunshine':
        return 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600' // Medium for Sunshine
      case '/sunset':
        return 'bg-gradient-to-r from-purple-800 via-pink-800 to-orange-800' // Darker for Sunset
      default:
        return 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600'
    }
  }

  return (
    <nav className={`shadow-lg fixed w-full top-0 z-50 ${getGradientClass()}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16">
          <div className="flex items-center gap-2">
            <Image 
              src="/zlogo2white.png"
              alt="Zaina Shaik Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Link 
              href="/" 
              className="text-xl font-bold text-white hover:text-pink-200 transition duration-300"
            >
              Zaina Shaik
            </Link>
          </div>
          
          <div className="ml-auto flex items-center gap-4">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg border-2 border-white/20 transition duration-300
                ${isActive('/') 
                  ? 'bg-white/20 text-white font-semibold' 
                  : 'text-white hover:bg-white/20 hover:text-white'
                }
              `}
            >
              Sunrise
            </Link>
            <Link 
              href="/sunshine" 
              className={`px-4 py-2 rounded-lg border-2 border-white/20 transition duration-300
                ${isActive('/sunshine') 
                  ? 'bg-white/20 text-white font-semibold' 
                  : 'text-white hover:bg-white/20 hover:text-white'
                }
              `}
            >
              Sunshine
            </Link>
            <Link 
              href="/sunset" 
              className={`px-4 py-2 rounded-lg border-2 border-white/20 transition duration-300
                ${isActive('/sunset') 
                  ? 'bg-white/20 text-white font-semibold' 
                  : 'text-white hover:bg-white/20 hover:text-white'
                }
              `}
            >
              Sunset
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
