var path = require('path');
var webpack = require('webpack');
var constants = require('../constants');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  entry: [
    path.join(constants.SRC_DIR, 'main.js')
  ],

  module: {
    loaders: [
      {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
      {test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000'},
      {test: /\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'}
    ]
  },

  output: {
    path: constants.DIST_DIR,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new NyanProgressPlugin(),
    // https://github.com/webpack/webpack/issues/198
    // http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),  // 去重
    new webpack.optimize.OccurenceOrderPlugin(),  // 使用频繁的 modules ，分配的 id 更短。也同时保证了 moduels 顺序的一直
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
    extensions: ['', '.js', '.jsx', '.json']
  }
};
