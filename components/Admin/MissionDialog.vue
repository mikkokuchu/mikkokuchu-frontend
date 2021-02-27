<template lang="pug">
  v-dialog(:value="showMissionDialog" @input="setMissionDialogShow(false)" max-width=500 persistent="")
    v-card
      v-card-title ユーザ情報
      v-card-text
        v-row
          v-col(cols=12)
            v-text-field(label='タイトル' :value="selectMission.title" @input="v => setMissionTitle(v)")
          v-col(cols=12)
            v-textarea(label='説明' :value="selectMission.description" @input="v => setMissionDescription(v)")
          v-col(cols=12)
            v-textarea(label='ペナルティ' :value="selectMission.penaltyText" @input="v => setMissionPenaltyText(v)")
          v-col(cols=12)
            v-text-field(type='number' label='開始時刻' :value="selectMission.startTime" @input="v => setMissionStartTime(v)")
          v-col(cols=12)
            v-text-field(type='number' label='終了時刻' :value="selectMission.endTime" @input="v => setMissionEndTime(v)")
          v-col(cols=12)
            v-select(label='タイプ' :value="selectMission.missionType" :items="['answer','QR','image']"  @input="v => setMissionType(v)")
      v-divider
      v-card-actions
        v-btn.error(@click="setMissionDialogShow(false);updateMissionsInfo()") キャンセル
        v-spacer
        v-btn.success(@click="saveMissionInfo()") 保存
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'MissionDialog',
  computed: {
    ...mapState('admin/admin', ['showMissionDialog', 'selectMission']),
  },
  methods: {
    ...mapActions('admin/admin', ['updateMissionsInfo', 'saveMissionInfo']),
    ...mapMutations('admin/admin', [
      'setMissionDialogShow',
      'setMissionTitle',
      'setMissionStartTime',
      'setMissionEndTime',
      'setMissionType',
      'setMissionPenaltyText',
      'setMissionDescription',
    ]),
  },
}
</script>

<style scoped></style>
