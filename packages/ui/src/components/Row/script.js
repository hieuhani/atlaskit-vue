import { breakpointKeys } from '@atlaskit-vue/ui/src/constants'
import { breakpointClass, capitalizeFirst, modifierClass } from '@atlaskit-vue/ui/src/utils'

const properties = {}

breakpointKeys.forEach(breakpoint => {
  const props = [
    'start',
    'center',
    'end',
    'top',
    'middle',
    'bottom',
    'around',
    'between',
    'reverse',
  ]
  props.forEach(property => {
    properties[property + capitalizeFirst(breakpoint)] = {
      type: Boolean,
      default: false,
    }
  })
})

export default {
  name: 'AvRow',
  props: {
    noGutter: {
      type: Boolean,
      default: false,
    },
    noCollapse: {
      type: Boolean,
      default: false,
    },
    ...properties,
  },
  computed: {
    classes() {
      return [
        this.noGutter ? '-no-gutter' : '',
        this.noCollapse ? '-no-collapse' : '',
        ...Object.keys(properties).map(p =>
          this[p] ? breakpointClass(modifierClass(p), this[p]) : '',
        ),
      ].filter(p => p !== '')
    },
  },
}
