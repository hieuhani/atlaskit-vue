import ClassesProviderMixin from '@atlaskit-vue/ui/src/mixins/components/providers/ClassesProviderMixin'
import InnerWrapper from './InnerWrapper'

export default {
  name: 'AvButton',
  mixins: [ClassesProviderMixin],
  components: {
    InnerWrapper,
  },
  props: {
    appearance: {
      type: String,
      default: 'default',
    },
    mode: {
      type: String,
      default: 'light',
    },
  },
  created() {
    this.classesProvider.add(() => ({
      [`av-button-${this.appearance}-${this.mode}`]: true,
    }))
  },
}
