var gulp = require('gulp');
var fs = require('fs');
var fsTools = require('fs-tools');

var config = require('./config');
var sitePath = config.paths.site;
var blogPath = sitePath + '/blog';

// all blog files are generated in /blog/[filename]/index.html
// i want them just as /blog/[filename].html so this task will move all of the files
// into this format

module.exports = function(done) {

  // traverse every blog index file
  fsTools.walkSync(blogPath, 'index.html$', function(path) {

    // ignore blog index
    if (path !== blogPath + '/index.html') {

      // get folder name
      var dir = /\/([^\/]+)\/index\.html$/.exec(path)[1];
      var newPath = blogPath + '/' + dir + '.html';

      if (fs.existsSync(path)) {

        // move to blog dir
        fs.renameSync(path, newPath);

        // remove folder
        fs.rmdirSync(blogPath + '/' + dir);
      }

    }

  });

  done();

};
