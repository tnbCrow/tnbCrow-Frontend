module.exports = {
  purge: ['./pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Roboto'"]
    },
    extend: {
      colors: {
        "dark": "#222",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
