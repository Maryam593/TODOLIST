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
    },
  },
  plugins: [],
}