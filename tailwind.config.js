/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.{html,js}",
    "./_includes/**/*.{html,njk}",
    "./components/**/*.{html,md}",
    "./*.{html,md}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        'primary-dark': '#115E59',
        neutral: '#F9FAFB',
        'neutral-dark': '#4B5563'
      },
      borderRadius: {
        'fds': '0.375rem'
      }
    }
  },
  plugins: [],
}
