module.exports = {
  mode: 'universal',
  head: {
    title: '%s - Atlaskit Vue',
  },
  plugins: ['~/plugins/atlaskit-vue'],
  build: {
    transpile: ['@atlaskit-vue/ui'],
  },
}
