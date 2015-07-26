var path = require('path');
var webpack = require('webpack');
var constants = require('../constants');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(constants.SRC_DIR, 'main.js'),
    vendors: ['react', 'react-document-title', 'react-router']
  },

  module: {
    loaders: [
      {test: /\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'}
    ]
  },

  output: {
    path: constants.DIST_DIR,
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new NyanProgressPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // keep_fnames prevents function name mangling.
      // Function names are useful. Seeing a readable error stack while
      // being able to programmatically analyse it is priceless. And yes,
      // we don't need infamous FLUX_ACTION_CONSTANTS with function name.
      // It's ES6 standard polyfilled by Babel.
      /* eslint-disable camelcase */
      compress: {
        keep_fnames: true,
        screw_ie8: true,
        warnings: false // Because uglify reports irrelevant warnings.
      },
      mangle: {
        keep_fnames: true
      }
      /* eslint-enable camelcase */
    })
  ],

  resolve: {
    alias: {
      'react$': path.join(constants.NODE_MODULES_DIR, 'react')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};