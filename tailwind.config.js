/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include your files here
  ],
  theme: {
    extend: {
      animation: {
        zoomIn: 'zoomIn 2s ease-in-out', // Define your custom animation
      },
      keyframes: {
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
          '100%': { opacity: 0, transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
