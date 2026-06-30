/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#ffffff',
        accent: '#0b5d3b',     // dark green - calm, medical, high contrast
        accentDark: '#073f28',
        warn: '#7a1f1f',       // for "avoid" / restricted items
        warnBg: '#fdecec',
        okBg: '#eaf6ee',
        border: '#d8d8d8'
      },
      fontSize: {
        base: '18px',
      },
    },
  },
  plugins: [],
}
