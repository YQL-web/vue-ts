var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var pages = require('../src/pageConfig.ts')

exports.getEntry = function(){
  var result = {};
  pages.block.map(function(p){
    result[p.entry] = path.resolve(__dirname,'../src/views', p.entry+'.ts');
  })
  return result
}
exports.template = function(){
  var homeUrl = process.env.NODE_ENV === 'production'?'./views/login/index.html':'./login/index.html'
  var pageDir = process.env.NODE_ENV === 'production'?config.build.pageDir:config.dev.pageDir;
  var pageExt = process.env.NODE_ENV === 'production'?config.build.pageExt:config.dev.pageExt;
  var result = [{
    template:path.resolve(__dirname,'../src/index.html'),
    homeUrl:homeUrl,
    filename:path.join('index.html'),
    chunks:[]
  }]
  pages.block.forEach(function(p){
    result.push({
      title:p.name,
      filename:path.join(pageDir,p.entry+'.'+pageExt),
      template:path.resolve(__dirname,'../index.html'),
      chunks: ['vendor', 'manifest', p.entry],
      hash:true
    })
  })
  return result;
}

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
