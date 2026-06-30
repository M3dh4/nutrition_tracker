/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1f2937',          // softened near-black for body text
        paper: '#fbf8f2',        // warm cream background
        card: '#ffffff',
        accent: '#0d8c72',       // teal - primary action color
        accentDark: '#066354',
        accentSoft: '#e3f5f0',   // light teal background for highlight boxes
        warn: '#b3261e',
        warnSoft: '#fdecea',
        border: '#e7e2d8',
      },
      boxShadow: {
        card: '0 1px 3px rgba(31, 41, 55, 0.08), 0 1px 2px rgba(31, 41, 55, 0.06)',
        cardHover: '0 2px 6px rgba(31, 41, 55, 0.12)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
