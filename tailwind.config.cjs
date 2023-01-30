/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#068903"
      },
      fontFamily: {
        header: "Montserrat",
        body: "Inter"
      },
      boxShadow: {
        'card': '0px 4px 4px 0px #00000040'
      },
      backgroundImage: {
        "best-tenants": "url(/src/assets/tenants.jpg)",
        "header": "url(/src/assets/header.jpg)",
      }
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
