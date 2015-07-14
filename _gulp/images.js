var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var config = require('./config');

module.exports = function() {

  return gulp
    .src(config.paths.src.images + '/**')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.paths.assets.images));

};