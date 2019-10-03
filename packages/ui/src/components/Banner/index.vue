<template>
  <div class="av-banner" :class="classes">
    <div class="av-banner-container" role="alert">
      <div class="av-banner-content">
        <div class="av-banner-text">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./index.scss" lang="scss">
