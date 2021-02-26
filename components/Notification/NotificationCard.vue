<template lang="pug">
  v-card
    v-card-title
      | {{ notification.title }}
      v-spacer
      h5 {{ new Date(notification.time) }}
    v-card-text {{ notification.text }}
</template>

<script>
export default {
  name: 'NotificationCard',
  props: ['notification'],
}
</script>

<style scoped></style>
