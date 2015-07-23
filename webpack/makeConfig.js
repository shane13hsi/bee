var path = require('path');
var constants = require('../constants');
var webpack = require('webpack');

module.exports = function(options) {
  var config = {
    entry: options.entry,
    output: options.output,

    cache: options.cache === undefined ? true : options.cache,   // 开发环境为 true，提升增量编译的性能
    debug: options.debug === undefined ? true : options.debug,    // loaders 可能会使用到 debug mode
    devtool: options.devtool === undefined ? 'eval' : options.devtool,  // 增强 debug,

    resolve: {
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
        'react$': require.resolve(path.join(constants.NODE_MODULES_DIR, 'react'))
      }
    },

    module: (function() {
      var loaders = [
        {test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000'}
      ];
      if (options.module.loaders) {
        options.module.loaders = loaders.concat(options.module.loaders);
      }
      return options.module;
    })(),

    plugins: (function() {
      var plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(options.env || 'development')
          }
        })
      ];
      if (options.plugins) {
        plugins = plugins.concat(options.plugins);
      }
      return plugins;
    })(),

    stats: {
      colors: true,
      reasons: true
    }
  };

  return config;
};
