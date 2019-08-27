<template>
  <av-container>
    <av-row>
      <av-col>
        <h1>Icon</h1>
        <av-icon name="user" />
        <av-icon name="bell" />
        <av-icon name="search" />
      </av-col>
      <av-col>
        <h1>Button</h1>
        <av-button mode="light" />
        <av-button mode="dark" />
      </av-col>
    </av-row>
  </av-container>
</template>

<script>
export default {
  head: {
    title: 'Home',
  },
}
</script>
