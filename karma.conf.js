var constants = require('./constants');

module.exports = function (config) {
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
      'src/**/*-test.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*-test.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: false,
    webpack: {
      module: {
        preLoaders: [
          {test: /-test\.js$/, include: constants.SRC_DIR, loader: 'babel-loader'},
          {
            test: /^((?!-test).)*\.js$/,  // 正则匹配去除 -test.js
            include: constants.SRC_DIR,
            loader: 'isparta?{ noAutoWrap: false, babel: { stage: 0 } }'
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
