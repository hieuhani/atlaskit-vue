<template>
  <button class="av-button" :class="classes" @click="$emit('click')">
    <span :class="{ 'inner-wrapper': true, fit: true }">
      <span class="content">
        <slot />
      </span>
    </span>
  </button>
</template>

<script src="./script.js" />
<style src="./index.scss" lang="scss">