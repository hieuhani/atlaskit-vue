export default {
  name: 'AvBlanket',
  props: {
    canClickThrough: {
      type: Boolean,
      default: false,
    },
    isTinted: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'light',
    },
  },
}
