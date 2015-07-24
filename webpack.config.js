var constants = require('./constants');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'}
    ]
  }
};