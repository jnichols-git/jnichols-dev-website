/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        j: {
          ...require("daisyui/src/colors/themes")["[data-theme=business]"],
          "primary": "#4bbfe3",
          "--rounded-box": "0.5rem",
          "--rounded-badge": "0.5rem",
          "--rounded-btn": "0.5rem"
        }
      }
    ],
  },
}
