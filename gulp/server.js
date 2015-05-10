var gulp = require('gulp');
var express = require('express');
var livereload = require('connect-livereload');
var refresh = require('gulp-livereload');
var shell = require('gulp-shell');

var config = require('./config');

var server = express();

server.use(livereload({
  port: config.ports.livereload
}));

server.use(express.static(config.paths.site));


module.exports = function(callback) {

  console.log('Listening on port ', config.ports.server);

  server.listen(config.ports.server);
  refresh.listen(config.ports.livereload);

  callback();

};