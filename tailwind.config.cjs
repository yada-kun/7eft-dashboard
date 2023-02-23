/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#2F80ED',
          500: '#20A5F0',
        },
        green: {
          500: '#48A85D',
        },
        red: {
          500: '#F02D20',
        },
      },
    },
  },
  plugins: [],
};
