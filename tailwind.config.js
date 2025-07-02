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
          DEFAULT: '#FFD700',
          50: '#FFFDF0',
          100: '#FFFADB',
          200: '#FFF4B8',
          300: '#FFED94',
          400: '#FFE671',
          500: '#FFD700',
          600: '#E6C200',
          700: '#CCAD00',
          800: '#B39900',
          900: '#998400'
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          50: '#404040',
          100: '#363636',
          200: '#2d2d2d',
          300: '#242424',
          400: '#1f1f1f',
          500: '#1a1a1a',
          600: '#151515',
          700: '#101010',
          800: '#0d0d0d',
          900: '#0a0a0a'
        },
        accent: {
          DEFAULT: '#FF6B6B',
          50: '#FFE8E8',
          100: '#FFD1D1',
          200: '#FFA3A3',
          300: '#FF7575',
          400: '#FF6B6B',
          500: '#FF5252',
          600: '#FF3939',
          700: '#FF2020',
          800: '#E61919',
          900: '#CC1616'
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'gold-lg': '0 0 40px rgba(255, 215, 0, 0.4)',
        'premium': '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}