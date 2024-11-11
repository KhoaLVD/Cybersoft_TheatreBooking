const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 13 column grid
        '13': 'repeat(13, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

