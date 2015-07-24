var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var constants = require('../constants');
var config = require('./webpack-dev.config');

var server = new WebpackDevServer(webpack(config), {
  contentBase: constants.BUILD_DIR,
  hot: true,
  publicPath: config.output.publicPath,
  quiet: false,
  noInfo: true
});

server.listen(constants.WEBPACK_DEV_SERVER_PORT, "0.0.0.0", function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at 0.0.0.0:' + constants.WEBPACK_DEV_SERVER_PORT);
});