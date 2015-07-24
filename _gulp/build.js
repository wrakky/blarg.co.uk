var gulp = require('gulp');
var shell = require('gulp-shell');
var refresh = require('gulp-livereload');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');

var config = require('./config');

module.exports = function() {

  var flags = ' --trace';

  if (config.environment.local) {
    flags += ' --drafts';
  }

  return gulp.src('')
    .pipe(plumber())
    .pipe(shell([
      'jekyll build' + flags
    ]))
    .pipe(gulpif(refresh.server, refresh()));

};