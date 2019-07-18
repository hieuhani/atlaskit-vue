const { resolve } = require('path')

const defaultOptions = {
  stylus: false,
  treeShaking: false,
}

module.exports = function AtlaskitVueNuxt(moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...defaultOptions,
      ...this.options.atlaskit,
      ...moduleOptions,
    }

    this.options.css = [].concat(this.options.css || [])
    if (options.stylus) {
      this.options.css.unshift('@atlaskit-vue/ui/src/index.styl')
    } else {
      this.options.css.unshift('@atlaskit-vue/ui/dist/AtlaskitVue.css')
    }

    this.options.build.transpile = [].concat(this.options.build.transpile || [])
    if (options.stylus || options.treeShaking) {
      this.options.build.transpile.push('@atlaskit-vue/ui')
    }

    const atlaskitVueOptions = { ...options }
    delete atlaskitVueOptions.stylus
    delete atlaskitVueOptions.treeShaking

    // Register plugin, passing options to plugin template
    this.addPlugin({
      src: resolve(__dirname, 'plugin.template.js'),
      fileName: 'AtlaskitVue.umd.js',
      options: {
        atlaskit: atlaskitVueOptions,
        treeShaking: options.treeShaking,
      },
    })
  })
}
