/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      background: '#eaeded',
      white: '#ffffff',
      primary: {
        50: '#f2f3f4',
        100: '#e6e8ea',
        200: '#ccd1d5',
        300: '#b2b9bf',
        400: '#99a1a8',
        500: '#808990', // Base color
        600: '#67727a',
        700: '#4d5a62',
        800: '#334148',
        900: '#19292e',
      },
      accent: {
        50: '#fcecee',
        100: '#f9d3d1',
        200: '#f6b8b0',
        300: '#f49d8f',
        400: '#f2806e',
        500: '#EF4B35', // Base color
        600: '#d83f2e',
        700: '#b63325',
        800: '#93181c',
        900: '#700e13',
      },
    },
    extend: {},
  },
  plugins: [],
};
