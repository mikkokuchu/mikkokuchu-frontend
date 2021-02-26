export const state = () => ({
  notifications: [],
})
export const mutations = {
  setNotifications(state, data) {
    state.notifications = data
  },
}

export const actions = {
  async updateNotifications({ commit, rootState }) {
    const notifications = await this.$axios.$get(
      rootState.endpoint + 'notification'
    )
    commit('setNotifications', notifications)
  },
}
