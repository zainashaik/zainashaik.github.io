'use client'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

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
    <footer className={`w-full py-4 text-center mt-auto ${getGradientClass()}`}>
      <p className="text-white">Copyright © {new Date().getFullYear()} Zaina Shaik</p>
    </footer>
  );
};

export default Footer; 