var rootPath = process.cwd();
var nodeModulesPath = rootPath + '/node_modules';
var srcPath = rootPath + '/_assets';
var sitePath = rootPath + '/_site';
var assetsPath = sitePath + '/assets';

var paths = {
  root: rootPath,
  site: sitePath,
  src: {
    path: srcPath,
    js: srcPath + '/js',
    sass: srcPath + '/sass',
    images: srcPath + '/images',
    fonts: srcPath + '/fonts'
  },
  assets: {
    css: assetsPath + '/css'
  },
  nodeModules: nodeModulesPath
};

module.exports = paths;
