module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}','./src/styles/**/*.css'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'star-wars': "url('/img/stars_nav.jpg')"
      }),
      colors: {
        primary: '#151515',
        customYellow: '#FFF600',
        customGray: '#282727',
        customGray100: '#DDDDDD'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
