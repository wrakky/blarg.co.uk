var argv = require('yargs').argv;

var flags = {
  sourcemaps: !!argv.sourcemaps,
  minify: !!argv.minify,
  drafts: !!argv.drafts
};

module.exports = flags;