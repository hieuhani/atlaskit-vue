<template>
  <span :class="{ 'inner-wrapper': true, fit: fit }">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    fit: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
