var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('server', require('./gulp/server'));
gulp.task('styles', require('./gulp/styles'));
gulp.task('build', require('./gulp/build'));
gulp.task('watch', require('./gulp/watch'));

gulp.task('assets', [
  'styles'
]);


//---------------

gulp.task('default', function(callback) {
  runSequence(
    'build',
    'assets',
    'server',
    'watch',
    callback
  );
});