import './index.styl'

import AvContainer from './components/Container'
import AvColumn from './components/Column'

const components = [AvContainer, AvColumn]

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

export { AvContainer, AvColumn }

export default AtlaskitVue
