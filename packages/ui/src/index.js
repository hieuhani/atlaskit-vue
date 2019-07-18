import './index.styl'

import AvContainer from './components/Container'

const components = [AvContainer]

const AtlaskitVue = {
  install(Vue, options = {}) {
    return (options.components || components).forEach(component => {
      Vue.component(component.name, component)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AtlaskitVue)
}

export { AvContainer }

export default AtlaskitVue
