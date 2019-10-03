<template>
  <div>
    <av-button @click="showBlanketClick">
      Show Blanket
    </av-button>
    <av-blanket
      :is-tinted="isBlanketVisible"
      :can-click-through="canClickThrough"
      @onBlanketClicked="onBlanketClicked"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      canClickThrough: true,
      isBlanketVisible: false,
    }
  },
  methods: {
    showBlanketClick() {
      this.isBlanketVisible = true
      this.canClickThrough = false
    },
    onBlanketClicked() {
      this.isBlanketVisible = false
      this.canClickThrough = true
    },
  },
}
</script>
