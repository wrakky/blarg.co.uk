var args = process.argv;
var task = args[2];

var environment = {
  local: args.length === 2,
  deploy: task === 'generate'
};

Object.keys(environment).forEach(function(key) {
  if (environment[key]) {
    environment.name = key;
  }
});

module.exports = environment;