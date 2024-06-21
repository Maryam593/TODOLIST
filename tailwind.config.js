/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },

  theme: {
    extend: {
      height: {
        '600': '600px',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at 10% 20%, rgb(249, 57, 170) 9.8%, rgb(134, 176, 255) 94.9%)',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        shakingDiv: {
          // '0%': { transform: 'rotate(0deg)' , backgroundColor: 'rgb(14, 165, 233)'},
          // '100%': { transform: 'rotate(360deg)' },
          '0%, 100%': { transform: 'translateX(0)',  backgroundColor: 'rgb(14, 165, 233)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        circulate: 'circulate 2s linear infinite',
      },
    }
    
  },
  plugins: [],
}