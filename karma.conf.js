module.exports = function(config) {
  config.set({
    browsers: ['ChromeCanary'],
    files: [
      'src/**/*-test.js',
      'src/**/*-test.coffee'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*-test.js': ['webpack', 'coverage'],
      'src/**/*-test.coffee': ['webpack', 'coverage']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: false,
    autoWatch: true,
    webpack: {
      module: {
        loaders: [
          {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.coffee?$/, exclude: /node_modules/, loader: 'coffee-loader'},
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};