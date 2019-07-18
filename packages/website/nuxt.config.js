module.exports = {
  mode: 'universal',
  head: {
    title: '%s - Atlaskit Vue',
    link: [
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css',
        rel: 'stylesheet',
      },
    ],
  },
  plugins: ['~/plugins/atlaskit-vue'],
  build: {
    transpile: ['@atlaskit-vue/ui'],
  },
}
