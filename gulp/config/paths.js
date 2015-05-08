var rootPath = process.cwd();
var nodeModulesPath = rootPath + '/node_modules';
var srcPath = rootPath + '/assets_src';
var buildPath = rootPath + '/assets';

var paths = {
  root: rootPath,
  src: {
    path: srcPath,
    js: srcPath + '/js',
    css: srcPath + '/css',
    images: srcPath + '/images',
    fonts: srcPath + '/fonts'
  },
  build: {
    path: buildPath,
    js: buildPath + '/js',
    css: buildPath + '/css',
    images: buildPath + '/images',
    fonts: buildPath + '/fonts'
  },
  nodeModules: nodeModulesPath
};

module.exports = paths;
