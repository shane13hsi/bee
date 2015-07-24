var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var constants = require('./constants');
var config = require('./webpack.config');
var ip = require('ip');

var server = new WebpackDevServer(webpack(config), {
  contentBase: constants.BUILD_DIR,
  hot: true,
  publicPath: config.output.publicPath,
  quiet: false,
  noInfo: true
});

server.listen(8080, "0.0.0.0", function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at 0.0.0.0:8080');
});