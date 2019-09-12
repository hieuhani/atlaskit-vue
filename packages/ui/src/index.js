import './index.scss'

import AvContainer from './components/Container'
import AvRow from './components/Row'
import AvColumn from './components/Column'
import AvButton from './components/Button'
import AvIcon from './components/Icon'

const components = [AvContainer, AvRow, AvColumn, AvButton, AvIcon]

const Atlaskit = {
  install(Vue, options = {}) {
    ;(options.components || components).forEach(component => {
      Vue.component(component.name, component)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Atlaskit)
}

export { AvContainer, AvRow, AvColumn, AvButton, AvIcon, Atlaskit }

export default Atlaskit
