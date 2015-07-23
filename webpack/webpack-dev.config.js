var makeConfig = require('./makeConfig');
var constants = require('../constants');
var path = require('path');
var webpack = require('webpack');

module.exports = makeConfig({
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + constants.WEBPACK_DEV_SERVER_PORT,
      'webpack/hot/only-dev-server',
      path.join(constants.SRC_DIR, 'main')
    ]
  },
  output: {
    path: path.join(constants.BUILD_DIR, 'js'),
    filename: '[name].js',
    publicPath: 'http://localhost:' + constants.WEBPACK_DEV_SERVER_PORT + '/build'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
