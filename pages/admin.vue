<template lang="pug">
  div
    admin-user-table.mb-2
    admin-mission-table
    user-dialog
    mission-dialog
</template>

<script>
import { mapActions } from 'vuex'
import UserDialog from '~/components/Admin/UserDialog'
import MissionDialog from '~/components/Admin/MissionDialog'

export default {
  name: 'admin',
  components: { UserDialog, MissionDialog },
  methods: {
    ...mapActions('admin/admin', ['updateUserInfo', 'updateMissionsInfo']),
  },
  mounted() {
    this.updateUserInfo()
    this.updateMissionsInfo()
  },
}
</script>

<style scoped></style>
