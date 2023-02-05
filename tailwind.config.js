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
        light: {
          "primary": "#003459",
          "secondary": "#007EA7",
          "accent": "#00A8E8",
          "neutral": "#00171F",
          "base-100": "#F1F2F6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        dark: {
          "primary": "#003459",
          "secondary": "#007EA7",
          "accent": "#00A8E8",
          "neutral": "#F1F2F6",
          "base-100": "#00171F",
          "base-content": "#F1F2F6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
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
