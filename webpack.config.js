module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/huan.js',
    library: 'huan'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(test|lib|node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  }
};
