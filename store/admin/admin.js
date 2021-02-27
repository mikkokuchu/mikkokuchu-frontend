export const state = () => ({
  users: [],
})
export const mutations = {
  setUsersInfo(state, data) {
    state.users = data
  },
}

export const actions = {
  async updateUserInfo({ commit, rootState }) {
    const usersInfo = await this.$axios.$get(rootState.endpoint + 'admin/user')
    commit('setUsersInfo', usersInfo)
  },
}
