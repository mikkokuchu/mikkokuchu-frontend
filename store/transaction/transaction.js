export const state = () => ({
  transactions: [],
})
export const mutations = {
  setTransactions(state, data) {
    state.transactions = data
  },
  setMissionResult({ commit, rootState }, { id, status }) {
    console.log('HI')
    /*    await this.$axios.$post(rootState.endpoint + 'admin/transaction/' + id, {
      status,
    }) */
  },
}

export const actions = {
  async updateTransactions({ commit, rootState }) {
    const usersInfo = await this.$axios.$get(
      rootState.endpoint + 'admin/transaction'
    )
    commit('setTransactions', usersInfo)
  },
  async log({ commit, rootState }, { id, status }) {
    console.log('HI')
    await this.$axios.$post(rootState.endpoint + 'admin/transaction/' + id, {
      status,
    })
    // state.transactions = []
  },
}
