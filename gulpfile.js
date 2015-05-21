var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('clean', require('./_gulp/clean'));
gulp.task('server', require('./_gulp/server'));
gulp.task('styles', require('./_gulp/styles'));
gulp.task('build', require('./_gulp/build'));
gulp.task('watch', require('./_gulp/watch'));

//---------------

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'build',
    [
      'styles'
    ],
    'server',
    'watch',
    callback
  );
});