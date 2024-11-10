/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust this pattern based on your file extensions and structure
  ],
  theme: {
    extend: {
      colors:{
        blue1: '#FFDC00',
        blue2: '#7FA1C3',
        grey1: '#000000',
        grey2: '#F5EDED',
        white1: '#ffffff',
      },
      backgroundImage:{
        'bg1': "url('')",
      }
    },
  },
  plugins: [],
}
