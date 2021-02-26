<template lang="pug">
  div
    div(v-for="(notification,index) in notifications" :key="index")
      notification-card.mt-3(:notification="notification")
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Notification',
  computed: {
    ...mapState('notification/notification', ['notifications']),
  },
  methods: {
    ...mapActions('notification/notification', ['updateNotifications']),
  },
  mounted() {
    this.updateNotifications()
  },
}
</script>

<style scoped></style>
