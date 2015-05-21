var gulp = require('gulp');
var express = require('express');
var livereload = require('connect-livereload');
var refresh = require('gulp-livereload');
var shell = require('gulp-shell');
var fs = require('fs');

var config = require('./config');

var server = express();

server.use(livereload({
  port: config.ports.livereload
}));

// rewrite requests with no extension as .html
var rewriter = function(req, res, next) {
  console.log(req.url);
  if (fs.existsSync(config.paths.site + req.url + '.html')) {
    req.url = req.url + '.html';
  }
  console.log(req.url);
  console.log('----');
  next();
};

server.use(rewriter);

server.use(express.static(config.paths.site));


module.exports = function(callback) {

  console.log('Listening on port ', config.ports.server);

  server.listen(config.ports.server);
  refresh.listen(config.ports.livereload);

  callback();

};