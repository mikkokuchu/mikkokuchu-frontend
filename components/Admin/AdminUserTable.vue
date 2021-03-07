<template lang="pug">
  v-card
    v-card-title ユーザ
    v-card-text
      v-data-table(:headers='headers' :items="users")
        template(v-slot:item.actions="{item}")
          v-icon(@click="setUserDialogId(item.id);setUserDialogShow(true)") mdi-pencil
        template(v-slot:item.joinTime="{item}")
          | {{ getDateFormat(item.joinTime) }}
        template(v-slot:item.mikkokuCount="{item}")
          | {{ item.mikkokus.length }}
        template(v-slot:item.mikkokuSuccess="{item}")
          | {{ (item.mikkokus.filter(x => x.status === true).length / item.mikkokus.length) || 0 }}
        template(v-slot:item.missionCount="{item}")
          | {{ item.missionTransactions.length }}
        template(v-slot:item.missionSuccess="{item}")
          | {{ (item.missionTransactions.filter(x => x.status === true).length / item.missionTransactions.length) || 0 }}
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AdminUserTable',
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        {
          text: '状態',
          value: 'userStatus',
        },
        {
          text: '名前',
          value: 'userName',
        },
        {
          text: 'ライフ数',
          value: 'lifeCount',
        },
        {
          text: 'コード',
          value: 'code',
        },
        {
          text: '密告数',
          value: 'mikkokuCount',
        },
        {
          text: '密告成功率',
          value: 'mikkokuSuccess',
        },
        {
          text: 'ミッション挑戦数',
          value: 'missionCount',
        },
        {
          text: 'ミッション成功率',
          value: 'missionSuccess',
        },
        {
          text: '参加日時',
          value: 'joinTime',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    ...mapState('admin/admin', ['users']),
  },
  methods: {
    ...mapMutations('admin/admin', ['setUserDialogId', 'setUserDialogShow']),
    getDateFormat(date) {
      const d = new Date(date)
      console.log(d)
      let str = ''
      str += [d.getFullYear(), d.getMonth(), d.getDay()].join('/')
      str += ' '
      str += [d.getHours(), d.getMinutes(), d.getSeconds()].join(':')
      return str
    },
  },
}
</script>

<style scoped></style>
