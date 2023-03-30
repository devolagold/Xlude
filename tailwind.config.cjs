/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      mlg: '1024px',
      xl: '1440px',
    },
    colors: {
      'primary': '#00AB44',
      'black': '#110F14',
      'white': '#FFFFFF',
      'grey': '#D9D9D9',
      'grey-2': '#F0F0F0',
    },
    fontFamily: {
      Familjen: ['Familjen Grotesk', 'sans-serif']
    },
    extend: {
    }
  },
  plugins: [],
}