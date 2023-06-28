/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
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
      darkMode: {
        background: '#1f2937',
        white: '#f2f2f2', // Modify white color in dark mode
        primary: {
          50: '#12202f', // Modify primary colors in dark mode
          100: '#1f3345',
          200: '#2d455e',
          300: '#3a5776',
          400: '#477a8e',
          500: '#548ca6',
          600: '#619ebf',
          700: '#6eafb7',
          800: '#7bbfcf',
          900: '#88d1e7',
        },
        accent: {
          50: '#fca9a2', // Modify accent colors in dark mode
          100: '#f8877c',
          200: '#f56455',
          300: '#f3422f',
          400: '#f12009',
          500: '#e71e06',
          600: '#c41b05',
          700: '#a11804',
          800: '#7d1503',
          900: '#5b1102',
        },
      },
    },
    extend: {
      extend: {
        backgroundColor: ['dark', 'dark-hover'],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
        textColor: ['dark', 'dark-hover', 'dark-active'],
      },
    },
  },
  plugins: ['tailwindcss-dark-mode'],
};
