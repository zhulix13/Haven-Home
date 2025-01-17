/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'sans-serif'], // Add General Sans as the default sans font
        clash: ['Clash Display', 'sans-serif'], // Add Clash Display as a custom font
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      boxShadow: {
        'custom-inset': 'inset 0px -2px 4px 3px #E0EAFE',
        'inset-dark': 'inset -4px -4px 4.7px 0px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}