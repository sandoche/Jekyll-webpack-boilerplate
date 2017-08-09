module.exports = ({ file, options, env }) => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'autoprefixer': {},
    'cssnano': env === 'production' ? {} : false
  }
})
