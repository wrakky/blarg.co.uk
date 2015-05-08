var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass            = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var refresh = require('gulp-livereload');
var gulpif = require('gulp-if');

var config = require('./config');

var targetBrowsers = 'last 2 Chrome versions';

module.exports = function() {

  return sass(config.paths.src.css + '/site.scss', {
    sourcemap: config.flags.sourcemaps,
    unixNewlines: true,
    style: config.flags.minified ? 'compressed' : 'nested',
    bundleExec: false,
    loadPath: [
      config.paths.nodeModules + '/bootstrap-sass/assets/stylesheets',
      config.paths.nodeModules
    ]
  })
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: targetBrowsers
    }))
    .pipe(gulpif(config.flags.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.paths.build.css))
    .pipe(gulpif(refresh.server, refresh()));

};