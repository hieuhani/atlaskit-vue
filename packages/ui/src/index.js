import './index.styl'

import AvContainer from './components/Container'
import AvRow from './components/Row'
import AvColumn from './components/Column'

const components = [AvContainer, AvRow, AvColumn]

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

export { AvContainer, AvRow, AvColumn }

export default AtlaskitVue
