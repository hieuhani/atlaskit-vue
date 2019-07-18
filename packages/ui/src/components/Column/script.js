import { breakpointKeys } from '@atlaskit-vue/ui/src/constants'
import { breakpointClass, capitalizeFirst, modifierClass } from '@atlaskit-vue/ui/src/utils'

const properties = {}
breakpointKeys.forEach(breakpoint => {
  if (breakpoint !== '') {
    properties[breakpoint] = {
      type: [String, Boolean, Number],
      default: false,
    }
  }
  let props = ['first', 'last']
  props.forEach(property => {
    properties[property + capitalizeFirst(breakpoint)] = {
      type: Boolean,
      default: false,
    }
  })
  props = [('offset', 'push', 'pull')]
  props.forEach(property => {
    properties[property + capitalizeFirst(breakpoint)] = {
      type: [String, Number],
      default: '',
    }
  })
})

export default {
  name: 'AvCol',
  props: properties,
  computed: {
    classes() {
      return [
        ...Object.keys(properties).map(p =>
          this[p] ? breakpointClass(modifierClass(p), this[p]) : '',
        ),
      ].filter(p => p !== '')
    },
  },
}
