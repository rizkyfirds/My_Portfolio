/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "blue" : "#0505AF",
      "white" : "#f8fafc",
      "navy" :"#172554",
      "softblue": "#0033ff"
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage:{
        "whiteMain":  "url('https://www.transparenttextures.com/patterns/redox-01.png')",
        "blueBackground": 'url("https://www.transparenttextures.com/patterns/cartographer.png")'
      },
      backgroundColor: {
        'custom-blue': '#0033ff',
        'custom-white': '#ffffff',
      },
    },
  },
  plugins: [],
}

