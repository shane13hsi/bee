var constants = require('../constants');
var path = require('path');
var webpack = require('webpack');
var ip = require('ip');
var ipAddress = ip.address();

module.exports = {
  devtool: 'eval',

  entry: {
    app: [
      'webpack-dev-server/client?http://' + ipAddress + ':' + constants.WEBPACK_DEV_SERVER_PORT,
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },

  module: {
    loaders: [
      {test: /\.js$/, include: constants.SRC_DIR, loaders: ['react-hot', 'babel-loader']}
    ]
  },

  output: {
    path: constants.BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};