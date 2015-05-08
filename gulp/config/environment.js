var args = process.argv;
var task = args[2];

var environment = {
  local: args.length === 2,
  development: task === 'deploy',
  production: task === 'production'
};

Object.keys(environment).forEach(function(key) {
  if (environment[key]) {
    environment.name = key;
  }
});

module.exports = environment;