/*eslint-disable no-console */

var compression = require('compression');
var express = require('express');
var constants = require('../constants');
var httpProxy = require('http-proxy');
var ip = require('ip');
var path = require('path');

module.exports = function () {
  var proxy = httpProxy.createProxyServer();
  var app = express();

  app.use(compression());
  // 打开，如果不用 dev-server，指向到类似于 dist/ 的磁盘目录上
  app.use('/dist', express.static(constants.DIST_DIR));

  // todo: 可以试下 isomorphic
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  // todo: 根据 env 判断使用 mock endpoint 还是 alpha
  require('./api')(app);

  // todo：添加 env 判断，只有 development 才使用 hot
  var bundler = require('../webpack/dev-server');
  bundler();

  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + ip.address() + ':' + constants.WEBPACK_DEV_SERVER_PORT
    });
  });

  proxy.on('error', function (e) {
    console.log('Could not connect to proxy, please try again...');
  });

  app.listen(constants.SERVER_PORT, function () {
    console.log('The server started on port ' + constants.SERVER_PORT);
  });

};
