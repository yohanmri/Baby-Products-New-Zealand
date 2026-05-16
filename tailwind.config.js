/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#cda67c',
          light: '#f0ebe4',
          dark: '#b5884b',
        },
        secondary: {
          DEFAULT: '#3f4d46',
          light: '#d6d0c5',
          dark: '#93737a',
        },
        custom: {
          darkGreen: '#3f4d46',
          gold: '#cda67c',
          greyBeige: '#d6d0c5',
          mutedPurple: '#93737a',
          lightBeige: '#f0ebe4',
          darkGold: '#b5884b',
          veryLightBeige: '#faf6f2',
        },
        cream: '#faf6f2',
        dark:  '#3f4d46',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(30,27,46,0.7) 0%, rgba(244,114,182,0.25) 100%)',
      },
      keyframes: {
        'kiwi-move': {
          '0%': { transform: 'translateX(-10vw) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(25vw) translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateX(50vw) translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateX(75vw) translateY(-20px) rotate(-5deg)' },
          '100%': { transform: 'translateX(110vw) translateY(0) rotate(0deg)' },
        }
      },
      animation: {
        'kiwi-walk': 'kiwi-move 20s linear infinite',
      }
    },
  },
  plugins: [],
}
