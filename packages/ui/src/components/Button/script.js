import ClassesProviderMixin from '@atlaskit-vue/ui/src/mixins/components/providers/ClassesProviderMixin'

export default {
  name: 'AvButton',
  mixins: [ClassesProviderMixin],
  props: {
    appearance: {
      type: String,
      default: 'default',
    },
    mode: {
      type: String,
      default: 'light',
    },
    spacing: {
      type: String,
      default: 'default',
    },
  },
  created() {
    this.classesProvider.add(() => ({
      [`av-button-${this.appearance}-${this.mode}`]: true,
      [`av-button-spacing-${this.spacing}`]: true,
    }))
  },
}
