const { resolve } = require('path')

module.exports = function AtlaskitVueNuxt(moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...this.options.atlaskit,
      ...moduleOptions,
    }

    this.options.css = [].concat(this.options.css || [])
    this.options.css.unshift('@atlaskit-vue/ui/dist/atlaskit-vue.css')

    this.options.build.transpile = [].concat(this.options.build.transpile || [])
    this.options.build.transpile.push('@atlaskit-vue/ui')

    // Register plugin, passing options to plugin template
    this.addPlugin({
      src: resolve(__dirname, 'plugin.template.js'),
      fileName: 'atlaskit-vue.js',
      options: {
        atlaskit: options,
      },
    })
  })
}
