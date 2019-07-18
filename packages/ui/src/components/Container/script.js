import ClassesProviderMixin from '@atlaskit-vue/ui/src/mixins/components/providers/ClassesProviderMixin'

export default {
  name: 'AvContainer',
  mixins: [ClassesProviderMixin],
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.classesProvider.add(() => ({
      '-fluid': this.fluid,
    }))
  },
}
