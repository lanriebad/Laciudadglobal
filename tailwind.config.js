/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#028CFF',
        grey:'#888888'
      },
      fontFamily: {
        sans: ['Averia Serif Libre', 'ui-sans-serif', 'system-ui'],
        body: ['Axiforma', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

