/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#2E7D32', light: '#66BB6A', dark: '#1B5E20' },
        earth: { DEFAULT: '#5D4037', light: '#8D6E63', dark: '#3E2723' },
        cream: { DEFAULT: '#FFF8E1', dark: '#FFF3C4' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
