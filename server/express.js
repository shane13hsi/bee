/*eslint-disable no-console */

var compression = require('compression');
var express = require('express');
var constants = require('../constants');
var httpProxy = require('http-proxy');
var ip = require('ip');
var path = require('path');

module.exports = function() {
  var proxy = httpProxy.createProxyServer();
  var app = express();

  app.use(compression());
  app.use(express.static(constants.BUILD_DIR));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  var bundler = require('../webpack/dev-server');
  bundler();

  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://' + ip.address() + ':' + constants.WEBPACK_DEV_SERVER_PORT
    });
  });

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

  app.listen(constants.SERVER_PORT, function() {
    console.log('The server started on port ' + constants.SERVER_PORT);
  });

};
