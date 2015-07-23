var constants = require('./constants');

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['ChromeCanary'],
    coverageReporter: {
      reporters: [
        {type: 'text'},
        {type: 'html'}
      ]
    },
    files: [
      'src/**/*-test.js',
      'src/**/*-test.coffee'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*-test.js': ['webpack'],
      'src/**/*-test.coffee': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: false,
    webpack: {
      module: {
        preLoaders: [
          {test: /-test\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'},
          {test: /-test\.coffee$/, include: constants.SRC_DIR, loader: 'coffee-loader'},
          {
            test: /\.js$/,  // todo: 正则匹配去除 -test.js
            include: constants.SRC_DIR,
            loader: 'isparta?{ noAutoWrap: false, babel: { stage: 1 } }'
          }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};