var ports       = require('./config/ports');
var paths       = require('./config/paths');
var environment = require('./config/environment');
var flags       = require('./config/flags');

module.exports = {
  ports: ports,
  paths: paths,
  environment: environment,
  flags: flags
};