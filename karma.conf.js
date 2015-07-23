module.exports = function(config) {
  config.set({
    browsers: ['ChromeCanary'],
    files: [
      'src/**/*-test.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*-test.js': ['webpack']
    },
    reporters: ['mocha'],
    singleRun: false,
    autoWatch: true,
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