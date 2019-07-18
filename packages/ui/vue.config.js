module.exports = {
  filenameHashing: false,
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      hotUpdateChunkFilename: 'hot/hot-update.js',
      hotUpdateMainFilename: 'hot/hot-update.json',
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-preset-env')()],
      },
    },
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.optimization.removeAvailableModules(false)
    config.optimization.concatenateModules(false)
    config.optimization.providedExports(false)
    config.optimization.usedExports(false)
    config.resolve.alias.set('@atlaskit-vue/ui', __dirname).end()
  },
}
