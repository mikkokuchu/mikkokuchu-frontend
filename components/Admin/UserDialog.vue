<template lang="pug">
  v-dialog(:value="showUserDialog" @input="setUserDialogShow(false)" max-width=500 persistent="")
    v-card
      v-card-title ユーザ情報
      v-card-text
        v-row
          v-col(cols=12)
            v-text-field(label='名前' :value="selectUser.userName" @input="v => setUserName(v)")
          v-col(cols=12)
            v-text-field(type='number' label='ライフ' :value="selectUser.lifeCount" @input="v => setLifeCount(v)")
          v-col(cols=12)
            v-text-field(label='コード' :value="selectUser.code" @input="v => setCode(v)")
      v-divider
      v-card-actions
        v-btn.error(@click="setUserDialogShow(false);updateUserInfo()") キャンセル
        v-spacer
        v-btn.success(@click="saveUserInfo()") 保存
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'UserDialog',
  computed: {
    ...mapState('admin/admin', [
      'showUserDialog',
      'userDialogId',
      'selectUser',
    ]),
  },
  methods: {
    ...mapMutations('admin/admin', [
      'setUserDialogShow',
      'setUserName',
      'setLifeCount',
      'setCode',
    ]),
    ...mapActions('admin/admin', ['saveUserInfo', 'updateUserInfo']),
  },
}
</script>

<style scoped></style>
