import './index.styl'

import AvContainer from './components/Container'
import AvRow from './components/Row'
import AvColumn from './components/Column'
import AvButton from './components/Button'
import AvIcon from './components/Icon'

const components = [AvContainer, AvRow, AvColumn, AvButton, AvIcon]

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
