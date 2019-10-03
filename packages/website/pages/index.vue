<template>
  <av-container>
    <av-row>
      <av-col>
        <h1>Col 1</h1>
        <av-icon name="user" />
        <av-icon name="bell" />
        <av-icon name="search" />
      </av-col>
      <av-col>
        <h1>Col 2</h1>
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
    <av-row>
      <av-col>
        <av-banner appearance="announcement">
          This is a announcement banner
        </av-banner>
        <av-banner appearance="warning">
          This is a warning banner
        </av-banner>
        <av-banner appearance="error">
          This is a error banner
        </av-banner>
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
