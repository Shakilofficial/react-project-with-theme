/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode variant
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F4EEFF',
          DEFAULT: '#DCD6F7',
          dark: '#A6B1E1',
          contrast: '#424874',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Example plugin configurations, if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
