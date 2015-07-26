/*eslint-disable no-console */

var compression = require('compression');
var express = require('express');
var constants = require('../constants');

module.exports = function(param) {
  var app = express();

  app.use(compression());
  app.use('/build', express.static('build'));

  app.get('/', function(req, res) {
    res.sendFile(param.indexHtmlPath);
  });

  app.listen(constants.SERVER_PORT);
  console.log('The server started on port ' + constants.SERVER_PORT);
};
