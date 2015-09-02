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
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
      {test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000'},
      {test: /\.js$/, include: constants.SRC_DIR, loaders: ['react-hot', 'babel-loader']}
    ]
  },

  output: {
    path: constants.BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};