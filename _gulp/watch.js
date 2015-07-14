var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

var config = require('./config');

module.exports = function() {

  watch(config.paths.src.sass + '/**/*.scss', batch(function(events, done) {
    gulp.start('styles', done);
  }));

  watch(config.paths.src.images + '**', batch(function(events, done) {
    gulp.start('images', done);
  }));

  watch(config.paths.src.js + '/site/**/*.js', batch(function(events, done) {
    gulp.start('scripts.site', done);
  }));

  watch(config.paths.src.js + '/pages/**/*.js', batch(function(events, done) {
    gulp.start('scripts.pages', done);
  }));

  //gulp.watch(config.paths.jekyll, ['build']);
  watch(
    config.paths.jekyll,
    {
      ignored: /\/_site\//
    },
    batch(function(events, done) {
      gulp.start('build', done);
    })
  );

};