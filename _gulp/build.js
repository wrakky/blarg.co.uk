var gulp = require('gulp');
var shell = require('gulp-shell');

module.exports = function() {

  return gulp.src('')
    .pipe(shell([
      'jekyll build --trace'
    ]));

};