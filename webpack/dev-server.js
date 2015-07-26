var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var constants = require('../constants');
var config = require('./webpack-dev.config');
var ip = require('ip');
var ipAddress = ip.address();

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
  console.log('Webpack dev server is Listening at ' + ipAddress + ':' + constants.WEBPACK_DEV_SERVER_PORT);
});