module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      {
        pattern: 'test-context.js', watched: false   // 无需 watch 此类文件
      }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'test-context.js': ['webpack']
    },
    reporters: ['nyan'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};