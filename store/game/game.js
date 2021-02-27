export const state = () => ({
  game: {},
  users: [],
})
export const mutations = {
  setGameInfo(state, data) {
    state.game = data
  },
  setUsersInfo(state, data) {
    state.users = data
  },
}

export const actions = {
  async updateGameInfo({ commit, rootState }) {
    const gameInfo = await this.$axios.$get(rootState.endpoint + 'game')
    commit('setGameInfo', gameInfo)
  },
  async updateUserInfo({ commit, rootState }) {
    const usersInfo = await this.$axios.$get(rootState.endpoint + 'game/user')
    commit('setUsersInfo', usersInfo)
  },
}
