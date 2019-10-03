<template>
  <div
    :class="`av-blanket ${mode}`"
    :style="{
      opacity: isTinted ? 1 : 0,
      pointerEvents: canClickThrough ? 'none' : 'initial',
    }"
    @click="$emit('onBlanketClicked')"
  />
</template>

<script src="./script.js" />
<style src="./index.scss" lang="scss">
