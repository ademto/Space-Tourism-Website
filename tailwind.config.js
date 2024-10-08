/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./src/assets/home/background-home-desktop.jpg')",
        'tablet-bg': "url('./src/assets/home/background-home-tablet.jpg')",
        'mobile-bg': "url('./src/assets/home/background-home-mobile.jpg')",
        'destination-bg': "url('./src/assets/destination/background-destination-desktop.jpg')",
        'destination-bg-tablet': "url('./src/assets/destination/background-destination-tablet.jpg')",
        'destination-bg-mobile': "url('./src/assets/destination/background-destination-mobile.jpg')",
        'crew-bg': "url('./src/assets/crew/background-crew-desktop.jpg')",
        'crew-bg-tablet': "url('./src/assets/crew/background-crew-tablet.jpg')",
        'crew-bg-mobile': "url('./src/assets/crew/background-crew-mobile.jpg')",
        'technology-bg': "url('./src/assets/technology/background-technology-desktop.jpg')",
        'technology-bg-tablet': "url('./src/assets/technology/background-technology-tablet.jpg')",
        'technology-bg-mobile': "url('./src/assets/technology/background-technology-mobile.jpg')",
      },
      screens: {
        'tablet': { 'raw': '(max-width: 1024px)' },  // Custom media query for tablets and larger
        'mobile': { 'raw': '(max-width: 767px)' },  // Custom media query for mobile devices and larger
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}