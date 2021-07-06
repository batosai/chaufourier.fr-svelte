module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.svelte',
      './src/**/*.js',
      './src/**/*.css',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#64b5f6', // For lighter primary color
          DEFAULT: '#2196f3', // Normal primary color
          dark: '#1976d2', // Used for hover, active, etc.
        },
      },
      backgroundImage: theme => ({
        'hero': "url('/hero.jpg')",
        'hero-modern': "url('/hero.webp')",
      })
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
