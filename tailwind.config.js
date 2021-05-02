module.exports = {
  purge: ['./pages/**/*.tsx', './components/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['roboto','Roboto']
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
