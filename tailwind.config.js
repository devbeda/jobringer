/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "jobRing-Blue": "#0030f9"
      },
      fontFamily:{
        "Logo":["Outfit","sans-serif"],
        "heading":["Lexend","sans-serif"]
      },
      colors:{
        "web-blue": "#0030f9",
        "web-bg-blue":"#D4EBF8",
        "web-dark-blue":"#1F509A",
        "web-darkest-blue":"#0A3981",
        "web-orange":"#E38E49",
      },
      dropShadow: {
        "card-shadow": ['10px 10px 15px rgb(150,148,255)']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

