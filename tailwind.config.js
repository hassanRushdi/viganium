/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-900" : '#B32C28',
        "brand-800" : '#B32C28',
        "brand-700" : '#C25653',
        "brand-600" : '#CA6B69',
        "brand-500" : '#D1807E',
        "brand-400" : '#D99593',
        "brand-300" : '#E1ABA9',
        "brand-200" : '#E8C0BE',
        "brand-100" : '#F0D5D4',
        "brand-50" : '#F7EAE9',
        black: '#1E1E1E',
        gray: '#A5A5A5'
      }
    },
  },
  plugins: [],
}

