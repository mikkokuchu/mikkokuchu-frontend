<template lang="pug">
  v-card(max-width=400)
    v-card-title {{ transaction.mission.title + ":" + transaction.sender.userName }}
    v-card-text
      v-img(:src="'https://mikkoku.ciebus.net/'+ transaction.imageUrl")
    v-card-actions
      v-btn.error(@click="log({id:transaction.id,status:false})") 失敗
      v-spacer
      v-btn.success(@click="log({id:transaction.id,status:true})") 成功
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TransactionCard',
  props: ['transaction'],
  methods: {
    ...mapActions('transaction/transaction', ['setMissionResult', 'log']),
  },
}
</script>

<style scoped></style>
