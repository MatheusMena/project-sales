/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        arsenic: '#38404B',
        'slate-blue': '#9488EF',
        'neon-blue': '#121063',
        Steel: '#565584',
        'midnght-express': '#1A202C'
        // 'silver': '#ecebff',
        // 'bubble-gum': '#ff77e9',
        // 'bermuda': '#78dcca',
      },
      keyframes: {
        scrollXFullToRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100px * 20) )' }
        },
        scrollXFullToLeft: {
          '0%': { transform: 'translateX(calc(-100px * 20))' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        scrollXR100: 'scrollXFullToRight 100s linear infinite',
        scrollXL120: 'scrollXFullToLeft 120s linear infinite',
        scrollXR50: 'scrollXFullToRight 50s linear infinite'
      }
    },
    plugins: []
  }
}
