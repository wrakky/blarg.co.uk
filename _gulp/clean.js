var del = require('del');
var config = require('./config');

module.exports = function(callback) {

  del([
    config.paths.site + '/**/*',
    '!' + config.paths.site + '/.git/**'
  ], { force: true, dot: true }, callback);

};