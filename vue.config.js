const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)
const sign = process.argv[4] // pc or  m
const productionGzip = true
const productionGzipExtensions = ['js', 'css']

const pages = {
  m: {
    entry: 'src/pages/m/main.ts',
    template: 'src/pages/m/index.html',
    filename: 'index.html',
    title: 'm',
    chunks: ['chunk-vendors', 'chunk-common', 'm'],
  },
  pc: {
    entry: 'src/pages/pc/main.ts',
    template: 'src/pages/pc/index.html',
    filename: 'index.html',
    title: 'pc',
    chunks: ['chunk-vendors', 'chunk-common', 'pc'],
  },
}

console.log('sign', sign)
module.exports = {
  lintOnSave: false,
  filenameHashing: true,
  outputDir: 'dist-' + sign,
  pages: {
    [sign]: pages[sign],
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
    config.plugins.delete('named-chunks')

    if (process.env.NODE_ENV !== 'development') {
      productionGzip &&
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8,
        })
    }
  },
}
