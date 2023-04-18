/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-gray-1" : "#dadce0",
        "brand-blue-1" : "#1967d2",
        "brand-green-1": "#137333"
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true,
   }
}
