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
        scrollXR: 'scrollXFullToRight 120s linear infinite',
        scrollXL: 'scrollXFullToLeft 120s linear infinite'
      }
    },
    plugins: []
  }
}
