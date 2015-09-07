var express = require('./express');

if (require('piping')({hook: true})) {
  express();
}
