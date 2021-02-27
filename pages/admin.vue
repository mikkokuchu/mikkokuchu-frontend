<template lang="pug">
  div
    admin-user-table
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'admin',
  methods: {
    ...mapActions('admin/admin', ['updateUserInfo']),
  },
  mounted() {
    this.updateUserInfo()
  },
}
</script>

<style scoped></style>
