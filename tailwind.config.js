/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Young Serif",
        bodyContent: "Roboto Slab"
      },
      colors: {
        background: "#14162E",
        primary: "#FFF",
        secondary: "#000"
      }
    },
  },
  plugins: [],
}
