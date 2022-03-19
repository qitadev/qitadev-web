module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#199259',
        'primary-dark': '#278558',
        'primary-light': '#F9FCFB',
        dark: '#272727'
      }
    }
  },
  plugins: []
}
