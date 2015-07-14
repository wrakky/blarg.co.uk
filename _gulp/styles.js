var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass            = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var refresh = require('gulp-livereload');
var gulpif = require('gulp-if');

var config = require('./config');

var targetBrowsers = [
  'last 2 versions',
  '> 5%'
];

module.exports = function() {

  return sass(config.paths.src.sass + '/site.scss', {
    sourcemap: config.flags.sourcemaps,
    unixNewlines: true,
    style: config.flags.minify ? 'compressed' : 'nested',
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
    .pipe(gulp.dest(config.paths.assets.css))
    .pipe(gulpif(refresh.server, refresh()));

};