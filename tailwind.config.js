/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.sky,
      neutral: colors.gray,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailgrids/plugin")
  ],
}

