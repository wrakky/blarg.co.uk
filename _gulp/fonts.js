var gulp = require('gulp');
var config = require('./config');

module.exports = function() {

  return gulp
    .src(config.paths.nodeModules + '/font-awesome/fonts/*')
    .pipe(gulp.dest(config.paths.assets.fonts));

};