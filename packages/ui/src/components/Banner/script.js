import ClassesProviderMixin from '@atlaskit-vue/ui/src/mixins/components/providers/ClassesProviderMixin'

export default {
  name: 'AvBanner',
  mixins: [ClassesProviderMixin],
  props: {
    appearance: {
      type: String,
      default: 'announcement',
    },
    mode: {
      type: String,
      default: 'light',
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.classesProvider.add(() => ({
      [`av-banner-${this.appearance}`]: true,
      [this.mode]: true,
    }))
  },
}
