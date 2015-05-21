var argv = require('yargs').argv;

var flags = {
  sourcemaps: !argv.nosourcemaps,
  minify: !!argv.minify
};

module.exports = flags;