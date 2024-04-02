/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1D3260',
      secondary: '#ECF5FC',
      info: '#a2b6df',
      bluelight: '#6b8cce',
      white: '#fff',
    },
    extend: {},
  },
  safelist: ['lg:order-1', 'lg:order-2', 'lg:order-3', 'lg:order-4', 'lg:order-5', 'lg:order-6', 'lg:order-7', 'lg:order-8', 'lg:order-9', 'lg:order-10'],
  plugins: [],
}

