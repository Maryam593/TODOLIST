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
      // keyframes: {
      //   shake: {
      //     '0%, 100%': { transform: 'translateX(0)' },
      //     '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
      //     '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
      //   }
      // },
      // animation: {
      //   shake: 'shake 0.5s ease-in-out infinite',
      // },
      keyframes: {
        beatShake: {
          '0%, 100%': { transform: 'scale(1) translateX(0)', backgroundColor: 'rgb(8,47,73)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'scale(1.1) translateX(-10px)', backgroundColor: 'white' },
          '20%, 40%, 60%, 80%': { transform: 'scale(1.1) translateX(10px)', backgroundColor: 'rgb(8,47,73)' },
          '25%, 75%': { backgroundColor: 'white' }
        },
        shake: {
              '0%, 100%': { transform: 'translateX(0)' },
              '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
              '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
            }
      },
      animation: {
        beatShake: 'beatShake 5s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out infinite',
      },
    }
    
  },
  plugins: [],
}