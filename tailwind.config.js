/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}', './index.html'],
  theme: {
    extend: {},
    colors: {
      primary: '#136F63',
      background: '#F8F6F1',
      dark: '#041B25',
      text: '#03141B',
      'text-light': '#4C5356',
      'background-hover': '#136F6315',
      rouge: '#BF3636',
      'orange-parkour': '#F5A647'
    }
  },
  plugins: []
}
