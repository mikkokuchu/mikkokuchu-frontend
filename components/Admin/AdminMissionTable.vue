<template lang="pug">
  v-card
    v-card-title クエスト
    v-card-text
      v-data-table(:headers='headers' :items="missions")
        template(v-slot:item.actions="{item}")
          v-icon(@click="setMissionDialogId(item.id);setMissionDialogShow(true)") mdi-pencil
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AdminMissionTable',
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        {
          text: 'タイトル',
          value: 'title',
        },
        {
          text: '開始時刻',
          value: 'startTime',
        },
        {
          text: '終了時刻',
          value: 'endTime',
        },
        {
          text: 'タイプ',
          value: 'missionType',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    ...mapState('admin/admin', ['missions']),
  },
  methods: {
    ...mapMutations('admin/admin', [
      'setMissionDialogShow',
      'setMissionDialogId',
    ]),
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
