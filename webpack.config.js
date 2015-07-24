var constants = require('./constants');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ],
    vendors: ['react']
  },

  module: {
    loaders: [
      {test: /\.js$/, include: constants.SRC_DIR, loaders: ['react-hot', 'babel-loader']}
    ],
    noParse: [path.join(constants.NODE_MODULES_DIR, 'react/dist/react-with-addons.min.js')]
  },

  output: {
    path: constants.BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],

  resolve: {
    alias: {
      'react$': path.join(constants.NODE_MODULES_DIR, 'react/dist/react-with-addons.min.js')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};