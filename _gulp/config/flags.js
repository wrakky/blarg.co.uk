var argv = require('yargs').argv;

var flags = {
  sourcemaps: !!argv.sourcemaps,
  minify: !!argv.minify
};

module.exports = flags;