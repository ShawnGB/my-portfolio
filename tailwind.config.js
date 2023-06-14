/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'Helvetica', 'sans'],
    },
    colors: {
      blue: '#0179B2ff',
      violet: '#542644ff',
      cyan: '#1BD7DFff',
      orange: '#FE7D40ff',
      primary: 'blue',
      secondary: 'orange',
    },
    extend: {},
  },
  plugins: [],
};
