var path = require('path');
var webpack = require('webpack');
var constants = require('../constants');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(constants.SRC_DIR, 'main.js'),
    vendors: [
      'alt',
      'alt/utils/connectToStores',
      'babel-core/polyfill',
      'react',
      'react-document-title',
      'react-router',
      'superagent',
      'superagent-promise'
    ]
  },

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
      {test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000'},
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
    }),
    new webpack.PrefetchPlugin("react"),
    new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ],

  resolve: {
    alias: {
      'react$': path.join(constants.NODE_MODULES_DIR, 'react')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};
