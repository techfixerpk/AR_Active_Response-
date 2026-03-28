
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#0f172a',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
