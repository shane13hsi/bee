var constants = require('./constants');
var path = require('path');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'react$': path.join(constants.NODE_MODULES_DIR, 'react/dist/react-with-addons.min.js')
    },
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    noParse: [path.join(constants.NODE_MODULES_DIR, 'react/dist/react-with-addons.min.js')],
    loaders: [
      {test: /\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'}
    ]
  }
};