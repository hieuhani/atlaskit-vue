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
    config.resolve.alias.set('@atlaskit-vue/ui', __dirname).end()
  },
}
