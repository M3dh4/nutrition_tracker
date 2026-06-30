/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1e2b22',          // deep forest charcoal for text
        paper: '#f4f8f3',        // very pale sage background
        card: '#ffffff',
        accent: '#2f6f4f',       // slightly dark green - primary action color
        accentDark: '#234f38',
        accentSoft: '#e1efe2',   // pale sage highlight background
        sage: '#bcd9c2',         // pastel sage - secondary accent
        sageDark: '#5a8a68',
        sageSoft: '#eef6ee',
        moss: '#9cc6a3',         // pastel moss green - tertiary accent
        mossDark: '#4f7d5b',
        warn: '#c97b6e',         // soft terracotta for warnings, not harsh red
        warnSoft: '#fbeeec',
        border: '#e3ece2',
      },
      boxShadow: {
        card: '0 1px 2px rgba(47, 111, 79, 0.07), 0 2px 8px rgba(47, 111, 79, 0.09)',
        cardHover: '0 2px 4px rgba(47, 111, 79, 0.1), 0 4px 14px rgba(47, 111, 79, 0.15)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
