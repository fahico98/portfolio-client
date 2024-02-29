/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // If you want to add additional small breakpoints, you can’t use "extend" because the
      // small breakpoint would be added to the end of the breakpoint list, and breakpoints
      // need to be sorted from smallest to largest in order to work as expected with a
      // min-width breakpoint system.
      screens: {
        xs: "400px", // @media (min-width: 400px) { ... }
        ...defaultTheme.screens
      },

      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans], // Texto base (By default)
        serif: ["Poppins", ...defaultTheme.fontFamily.serif], // Títulos y subtitulos
        mono: ["Red Hat Mono", ...defaultTheme.fontFamily.mono] // Enlaces y botones
      },

      colors: {
        high: {
          50: "#e8f1ff",
          100: "#d5e4ff",
          200: "#b3ccff",
          300: "#85a8ff",
          400: "#5676ff",
          500: "#2f45ff",
          600: "#0c0eff",
          700: "#0000ff", // Original
          800: "#0609cd",
          900: "#10169f",
          950: "#0a0b5c"
        },
        headline: {
          50: "#f1f2fc",
          100: "#e5e9fa",
          200: "#d0d5f5",
          300: "#b3baee",
          400: "#9597e4",
          500: "#7f7bd9",
          600: "#6d61cb",
          700: "#5e50b2",
          800: "#4d4390",
          900: "#413c73",
          950: "#272343" // Original
        },
        secondary: {
          50: "#f0fbfa",
          100: "#e3f6f5", // Original
          200: "#b9e8e7",
          300: "#89d7d5",
          400: "#51bfbf",
          500: "#36a3a4",
          600: "#2f868b",
          700: "#2c6d72",
          800: "#2b595f",
          900: "#284c51",
          950: "#163136"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
