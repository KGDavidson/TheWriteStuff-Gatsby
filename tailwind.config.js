/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'navbar': '4rem',
        'featured': 'calc(100vh - 4rem - 3rem)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
