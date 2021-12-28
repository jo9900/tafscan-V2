const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const resolve = (dir) => path.join(__dirname, dir)
const sign = process.argv[5].split('--')[1] // pc or  m
const productionGzip = true
const productionGzipExtensions = ['js', 'css']

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const pages = {
  m: {
    entry: 'src/pages/m/main.ts',
    template: 'src/pages/m/index.html',
    filename: 'index.html',
    title: 'TAF SCAN',
    chunks: ['chunk-vendors', 'chunk-common', 'chunk-core', 'chunk-m'],
  },
  pc: {
    entry: 'src/pages/pc/main.ts',
    template: 'src/pages/pc/index.html',
    filename: 'index.html',
    title: 'TAF SCAN',
    chunks: ['chunk-vendors', 'chunk-common', 'chunk-core', 'pc'],
  },
}
module.exports = {
  publicPath: sign === 'm' ? '/m/' : '/',
  lintOnSave: false,
  filenameHashing: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  outputDir: 'dist',
  pages: {
    [sign]: pages[sign],
  },
  devServer: {
    port: 4070,
    open: true,
    hot: true,
    proxy: {
      '/nuvateq': {
        target: 'http://management-test.nuvawallet.com/'
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugins.delete('named-chunks')
    if (process.env.NODE_ENV === 'local') {
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
    }

    if (process.env.NODE_ENV !== 'development') {
      productionGzip &&
      new CompressionWebpackPlugin({
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 8192,
        minRatio: 0.8,
      })
    }
    if (process.env.NODE_ENV !== 'development') {
      config.optimization.splitChunks({
        chunks: 'all',
        minChunks: 1,
        cacheGroups: {
          common: {
            name: 'chunk-common',
            priority: 1,
            minChunks: 2,
            maxInitialRequests: 5,
          },
          vendors: {
            name: 'chunk-vendors',
            priority: 2,
            test: /[\\/]node_modules[\\/]/,
          },
          core: {
            name: 'chunk-core',
            priority: 10,
            test: /[\\/]node_modules[\\/]_?core-js(.*)/,
          },
        },
      })
    }
    config.resolve.alias
      .set('@', path.join(__dirname, './src'))
      .set('@pc', path.join(__dirname, './src/pages/pc'))
      .set('@m', path.join(__dirname, './src/pages/m'))
      .set('vue-i18', 'vue-i18n/dist/vue-i18n.cjs.js')

    config.when(process.env.NODE_ENV === 'production', (config) => {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true
        args[0].terserOptions.compress.drop_debugger = true
        args[0].terserOptions.compress.pure_funcs = ['console.log']
        args[0].terserOptions.output = {
          comments: false,
        }
        return args
      })
    })
  },
}
