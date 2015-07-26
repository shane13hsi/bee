var path = require('path');
var webpack = require('webpack');
var constants = require('../constants');

module.exports = {
  entry: {
    app: ['./src/main.js'],
    vendors: ['react']
  },

  module: {
    loaders: [
      {test: /\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'}
    ],
    noParse: [path.join(constants.NODE_MODULES_DIR, 'react/dist/react-with-addons.min.js')]
  },

  output: {
    path: constants.DIST_DIR,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],

  resolve: {
    alias: {
      'react$': path.join(constants.NODE_MODULES_DIR, 'react/dist/react-with-addons.min.js')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};
