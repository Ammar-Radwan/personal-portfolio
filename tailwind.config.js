/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        spread: '0 0 30px 1px rgb(165 185 213 / 26%)'
      },
      colors: {
        primary: {
          gray: '#292727',
          blue: '#5583EF'
        },
        secondry: {
          gray: '#D8D8D8'
        }
      },
    },
  },
  plugins: [],
}

