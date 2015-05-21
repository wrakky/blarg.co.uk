var gulp = require('gulp');
var shell = require('gulp-shell');
var refresh = require('gulp-livereload');
var gulpif = require('gulp-if');

module.exports = function() {

  return gulp.src('')
    .pipe(shell([
      'jekyll build --trace'
    ]))
    .pipe(gulpif(refresh.server, refresh()));

};