var gulp = require('gulp');
var minify = require('gulp-minify-html');

var config = require('./config');

module.exports = function(callback) {

  if (config.flags.minify) {

    return gulp
      .src([
        config.paths.site + '/**/*.html',
        config.paths.site + '/**/*.xml'
      ])
      .pipe(minify({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(gulp.dest(config.paths.site));

  }
  else {

    callback();

  }

};