<template lang="pug">
  div
    v-alert(border="top" colored-border="" type="info" elevation=2)
      nuxt-link(to="/notification")
       | 密告中運営からのお知らせがあります。
    countdown-card.mb-3
    // line-card
    // map-card
    v-row
      v-col(cols=12 sm=6 md=6 lg=6 xl=6)
        v-card(max-width="500px")
          v-card-title LINE
          v-card-text
            | ゲーム進行用のLINEBotの登録、参加登録をお願いします。
          v-card-actions
            v-spacer
            v-btn.white--text(color='#00B900' href="https://lin.ee/mANdjB7" target="_blank") LINEBotを追加する
        v-card.mt-2(max-width="500px")
          v-card-title 範囲(まだ)
          v-card-text
            v-img(src='/map.png')
        v-card.mt-2(max-height="500px")
          v-card-text
            twitter-card
      v-col(cols=12 sm=6 md=6 lg=6 xl=6)
        v-card(max-width="500px")
          v-card-title 参加者
          v-card-text
            v-data-table(:headers="headers" :items="users")

    // div(v-for="(user,index) in users" :key="index")
      user-card(:user="user")

</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserCard from '~/components/Index/UserCard'

export default {
  components: { UserCard },
  data() {
    return {
      headers: [
        {
          text: '名前',
          align: 'start',
          sortable: false,
          value: 'userName',
        },
        {
          text: 'ライフ',
          align: 'end',
          sortable: false,
          value: 'lifeCount',
        },
      ],
    }
  },
  computed: {
    ...mapState('game/game', ['users']),
  },
  mounted() {
    this.updateGameInfo()
    this.updateUserInfo()
  },
  methods: {
    ...mapActions('game/game', ['updateGameInfo', 'updateUserInfo']),
  },
}
</script>
