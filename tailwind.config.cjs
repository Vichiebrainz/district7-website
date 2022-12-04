/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        "primary-green":"#068903"
      },
      fontFamily:{
        header:"Montserrat",
        body:"Inter"
      }
    },
  },
  plugins: [],
}
