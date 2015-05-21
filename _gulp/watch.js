var gulp = require('gulp');

var config = require('./config');

module.exports = function() {

  gulp.watch(config.paths.src.sass + '/**/*.scss', ['styles']);
  //gulp.watch(config.paths.src.path + '**/*.html', ['html']);
  //gulp.watch(config.paths.src.image + '/**/*', ['images']);
  //gulp.watch(config.paths.src.jsFiles, ['lint']);

};