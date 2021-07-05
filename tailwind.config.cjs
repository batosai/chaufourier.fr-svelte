module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#64b5f6", // For lighter primary color
          DEFAULT: "#2196f3", // Normal primary color
          dark: "#1976d2", // Used for hover, active, etc.
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("kutty"),
    require("@tailwindcss/typography"),
  ],
}
