/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      keyframes: {
        me: {
        '0%': {  borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%;'},
        '50%': {  borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%;' },
        '100%': {  borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%;'}
      },
    },
    animation:{
      me: 'me 8s ease-in-out infinite 1s'
    },
    },
  },
  plugins: [],
}