/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        1: '16px', // Переопределяем gap-1, чтобы оно равнялось 16px
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
