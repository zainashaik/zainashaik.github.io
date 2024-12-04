/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        base: '18px', // Increase the base font size
        lg: '20px',   // Adjust other sizes as needed
        xl: '24px',
        '2xl': '30px',
        // Add more sizes if needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

