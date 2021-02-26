<template lang="pug">
  div
    v-alert(border="top" colored-border="" type="info" elevation=2)
      nuxt-link(to="/notification")
       | 密告中運営からのお知らせがあります。
</template>

<script>
export default {
  components: {},
}
</script>
