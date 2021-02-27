<template lang="pug">
  v-card
    v-card-title {{ game.title }} {{ new Date().getTime() < game.startTime ? "開始" : "終了" }} まで残り:
      vue-countdown(v-if="new Date().getTime() < game.startTime" :time="game.startTime - new Date().getTime()" v-slot="{ days, hours, minutes, seconds }")
        | {{ days }}日{{ hours }}時間{{ minutes }}分{{ seconds }}秒
      vue-countdown(v-else :time="game.endTime - new Date().getTime()" v-slot="{ days, hours, minutes, seconds }")
        | {{ days }}日{{ hours }}時間{{ minutes }}分{{ seconds }}秒
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CountdownCard',
  computed: {
    ...mapState('game/game', ['game']),
  },
}
</script>

<style scoped></style>
