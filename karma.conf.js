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
      'src/**/*-test.coffee'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*-test.coffee': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: false,
    webpack: {
      module: {
        preLoaders: [
          {test: /-test\.coffee$/, include: constants.SRC_DIR, loader: 'coffee-loader'},
          {
            test: /\.js$/,
            include: constants.SRC_DIR,
            loader: 'isparta?{ noAutoWrap: false, babel: { stage: 1 } }'
          }
        ],
        loaders: []
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};