var gulp = require('gulp');
var runSequence = require('run-sequence');

//gulp.task('clean', require('./gulp/clean'));
//gulp.task('server', require('./gulp/server'));
gulp.task('styles', require('./gulp/styles'));
//gulp.task('scripts', require('./gulp/scripts'));
//gulp.task('libs', require('./gulp/libs'));
//gulp.task('html', require('./gulp/html'));
//gulp.task('images', require('./gulp/images'));
//gulp.task('fonts', require('./gulp/fonts'));
//gulp.task('watch', require('./gulp/watch'));
//gulp.task('lint', require('./gulp/lint'));
//gulp.task('copy', require('./gulp/copy'));

gulp.task('build', [
  'styles',
  //'scripts',
  //'libs',
  //'html',
  //'images',
  //'fonts'
]);


//---------------

gulp.task('default', function(callback) {
  runSequence(
    //'clean',
    //'lint',
    'build',
    //'watch',
    //'server',
    callback
  );
});

gulp.task('deploy', function(callback) {
  runSequence(
    'clean',
    'build',
    'copy',
    callback
  );
});

gulp.task('production', ['deploy']);