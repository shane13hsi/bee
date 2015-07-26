var express = require('./express');
var path = require('path');

if (require('piping')({hook: true})) {
  express();
}
