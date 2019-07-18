import ClassesProviderMixin from '@atlaskit-vue/ui/src/mixins/components/providers/ClassesProviderMixin'

export default {
  name: 'AvIcon',
  mixins: [ClassesProviderMixin],
  props: {
    name: {
      type: String,
      required: true,
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator(v) {
        return ['solid', 'regular', 'brands'].includes(v)
      },
    },
    size: {
      type: String,
      default: '1em',
    },
    color: {
      type: String,
    },
    bgColor: {
      type: String,
    },
  },
  computed: {
    fontStyle() {
      switch (this.iconStyle) {
        case 'regular':
          return 'far'
        case 'solid':
          return 'fas'
        case 'brands':
          return 'fab'
        default:
          return 'fas'
      }
    },
  },
  created() {
    this.classesProvider.add(() => ({
      [this.fontStyle]: true,
      [`fa-${this.name}`]: Boolean(this.name),
    }))
  },
}
