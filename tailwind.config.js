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
    },
  },
  plugins: [],
}
