export const state = () => ({
  users: [],
  missions: [],
  selectUser: {},
  selectMission: {},
  showUserDialog: false,
  showMissionDialog: false,
  userDialogId: null,
  missionDialogId: null,
})
export const mutations = {
  setUsersInfo(state, data) {
    state.users = data
  },
  setMissionsInfo(state, data) {
    state.missions = data
  },
  setUserDialogId(state, data) {
    console.log(data)
    state.userDialogId = data
    state.selectUser = state.users.find((p) => p.id === data)
  },
  setUserDialogShow(state, data) {
    state.showUserDialog = data
    if (!data) {
      state.selectUser = {}
      state.userDialogId = null
    }
  },

  setMissionDialogId(state, data) {
    console.log(data)
    state.questDialogId = data
    state.selectMission = state.missions.find((p) => p.id === data)
  },
  setMissionDialogShow(state, data) {
    state.showMissionDialog = data
    if (!data) {
      state.selectMission = {}
      state.missionDialogId = null
    }
  },

  setUserName(state, data) {
    state.selectUser.userName = data
  },
  setLifeCount(state, data) {
    state.selectUser.lifeCount = data
  },
  setCode(state, data) {
    state.selectUser.code = data
  },

  setMissionTitle(state, data) {
    state.selectMission.title = data
  },
  setMissionDescription(state, data) {
    state.selectMission.description = data
  },
  setMissionPenaltyText(state, data) {
    state.selectMission.penaltyText = data
  },
  setMissionStartTime(state, data) {
    state.selectMission.startTime = data
  },
  setMissionEndTime(state, data) {
    state.selectMission.endTime = data
  },
  setMissionType(state, data) {
    state.selectMission.missionType = data
  },
}

export const actions = {
  async updateUserInfo({ commit, rootState }) {
    const usersInfo = await this.$axios.$get(rootState.endpoint + 'admin/user')
    commit('setUsersInfo', usersInfo)
  },
  async updateMissionsInfo({ commit, rootState }) {
    const missionsInfo = await this.$axios.$get(
      rootState.endpoint + 'admin/mission'
    )
    commit('setMissionsInfo', missionsInfo)
  },
  async saveUserInfo({ dispatch, commit, rootState, state }) {
    await this.$axios.$post(
      rootState.endpoint + 'admin/user/' + state.selectUser.id,
      state.selectUser,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    commit('setUserDialogShow', false)
    dispatch('updateUserInfo')
  },
  async saveMissionInfo({ dispatch, commit, rootState, state }) {
    await this.$axios.$post(
      rootState.endpoint + 'admin/mission/' + state.selectMission.id,
      state.selectMission,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    commit('setMissionDialogShow', false)
    dispatch('updateMissionsInfo')
  },
}
