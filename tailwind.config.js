/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'dm-sans': ['"DM Sans Variable"', 'sans-serif']
    },
    extend: {
      colors: {
        'usr-bg-primary': '#111315',
        'usr-bg-secondary': '#1B1D1F',
        'usr-text-primary': '#BEE3CC',
        'usr-text-secondary': '#6F757C',
        'usr-button-primary': '#6F757C',
        'usr-badge': '#F6C768',
        'usr-warning': '#ED735D'
      }
    }
  },
  plugins: []
}
