/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'phone': '360px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        moneyGraphy: ['moneyGraphy']
      }
    },
  },
  plugins: [],
}

