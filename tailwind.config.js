/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./{src,components,pages}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'emerald-green': '#0a5439',
        'soft-gold': '#fde488',
        'warm-gold': '#f5c558',
      },
      fontFamily: {
        'serif-elegant': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
