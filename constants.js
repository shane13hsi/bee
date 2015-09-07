/*eslint-env node*/
var path = require('path');
var ABSOLUTE_BASE = path.normalize(path.join(__dirname));

module.exports = Object.freeze({
  ABSOLUTE_BASE: ABSOLUTE_BASE,
  NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, 'node_modules'),
  KARMA_CONFIG_PATH: path.join(ABSOLUTE_BASE, 'karma.conf.js'),

  BUILD_DIR: path.join(ABSOLUTE_BASE, 'build'),
  DIST_DIR: path.join(ABSOLUTE_BASE, 'dist'),

  SRC_DIR: path.join(ABSOLUTE_BASE, 'src'),

  SERVER_PORT: 8000,
  WEBPACK_DEV_SERVER_PORT: 9090
});
