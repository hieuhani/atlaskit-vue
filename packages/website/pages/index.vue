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
        <av-button mode="light" appearance="primary" />
        <av-button mode="dark" appearance="primary" />
        <av-button mode="light" appearance="warning" />
        <av-button mode="dark" appearance="warning" />
        <av-button mode="light" appearance="danger" />
        <av-button mode="dark" appearance="danger" />
        <av-button mode="light" appearance="link" />
        <av-button mode="dark" appearance="link" />
        <av-button mode="light" appearance="subtle" />
        <av-button mode="dark" appearance="subtle" />
        <av-button mode="light" appearance="subtle-link" />
        <av-button mode="dark" appearance="subtle-link" />
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
