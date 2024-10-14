/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'radixblue': {
        100: '#FDFDFE',
        200: '#F7F9FF',
        300: '#EDF2FE',
        400: '#DFEAFF',
        500: '#D0DFFF',
        600: '#BDD1FF',
        700: '#A6BFF9',
        800: '#87A5EF',
        900: '#3D63DD',
        1000: '#3657C3',
        1100: '#395BC7',
        1200: '#1D2E5C',
      },
      'radixblack': {
        100: '#FCFCFD',
        200: '#F9F9FB',
        300: '#EFF0F3',
        400: '#E7E8EC',
        500: '#E0E1E6',
        600: '#D8D9E0',
        700: '#CDCED7',
        800: '#B9BBC6',
        900: '#8B8D98',
        1000: '#80828D',
        1100: '#62636C',
        1200: '#1E1F24',
      }
    },
  },
  plugins: [],
 }
}
