/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md,njk}',
    './_site/**/*.{html,js,md,njk}',
    './*.{html,js,md,njk}',
    './!(node_modules)/**/*.{html,js,md,njk}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#368727',
          dark: '#2a6b1f',
          light: '#4ca33b'
        },
        neutral: {
          DEFAULT: '#F9F9F9',
          dark: '#4A4A4A',
          darker: '#2D2D2D'
        }
      },
      borderRadius: {
        'fds': '12px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
