var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('clean', require('./_gulp/clean'));
gulp.task('build', require('./_gulp/build'));

gulp.task('styles', require('./_gulp/styles'));
gulp.task('fonts', require('./_gulp/fonts'));
gulp.task('images', require('./_gulp/images'));

var scripts = require('./_gulp/scripts');
gulp.task('scripts.libs', scripts.libs);
gulp.task('scripts.site', scripts.site);
gulp.task('scripts.pages', scripts.pages);
gulp.task('scripts', ['scripts.libs', 'scripts.site', 'scripts.pages']);

gulp.task('blog', require('./_gulp/blog'));

gulp.task('server', require('./_gulp/server'));
gulp.task('watch', require('./_gulp/watch'));

//---------------

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'build',
    [
      'styles',
      'fonts',
      'images',
      'scripts',
      'blog'
    ],
    'server',
    'watch',
    callback
  );
});