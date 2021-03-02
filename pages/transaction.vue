<template lang="pug">
  div
   transaction-card.ma-2(v-for="(transaction, index) in transactions" :key="index" :transaction="transaction")
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Transaction',
  computed: {
    ...mapState('transaction/transaction', ['transactions']),
  },
  methods: {
    ...mapActions('transaction/transaction', ['updateTransactions']),
  },
  mounted() {
    setInterval(() => this.updateTransactions(), 1000)
  },
}
</script>

<style scoped></style>
