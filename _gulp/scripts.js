var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');

var config = require('./config');

var libs = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootstrap/js/tooltip.js',
  'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
];

var bundle = function(input, output, dest) {

  return function() {
    return gulp.src(input)
      .pipe(plumber())
      .pipe(gulpif(config.flags.sourcemaps, sourcemaps.init()))
      .pipe(babel())
      .pipe(gulpif(config.flags.minify, uglify()))
      .pipe(gulpif(!!output, concat(output || 'empty')))
      .pipe(gulpif(config.flags.sourcemaps, sourcemaps.write()))
      .pipe(gulp.dest(config.paths.assets.js + (dest || '')));
  }

};

module.exports = {
  libs: bundle(libs, 'libs.js'),
  site: bundle(config.paths.src.js + '/site/*.js', 'site.js'),
  pages: bundle(config.paths.src.js + '/pages/**/*.js', false, '/pages')
};
