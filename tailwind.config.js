/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4F0E4',
          dark: '#ECE5D2',
        },
        charcoal: '#1A1A16',
        teal: {
          DEFAULT: '#1F5C4D',
          dark: '#12362D',
          light: '#E3ECE5',
        },
        muted: '#6E6A5C',
        line: '#D8D1BC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
};
