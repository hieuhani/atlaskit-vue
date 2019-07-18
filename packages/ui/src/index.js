import '@atlaskit-vue/ui/src/index.styl'

import AvContainer from '@atlaskit-vue/ui/src/components/Container'
import AvRow from '@atlaskit-vue/ui/src/components/Row'
import AvColumn from '@atlaskit-vue/ui/src/components/Column'
import AvButton from '@atlaskit-vue/ui/src/components/Button'
import AvIcon from '@atlaskit-vue/ui/src/components/Icon'

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

export { AvContainer, AvRow, AvColumn, Atlaskit }

export default Atlaskit
