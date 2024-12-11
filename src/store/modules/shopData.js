
const shopData = {
  state: () => ({
    users: []
  }),
  mutations: {
    EDIT_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        const response = await fetch("https://myproga-96e3b-default-rtdb.firebaseio.com/fashion.json");
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          commit('EDIT_USERS', data);

        } else {
          console.log('ooo')
        }
      } catch(error) {
        console.error('error', error)
      }
    }
  },
  getters: {
    getAllData: (state) => state.users
  }
}

export default shopData;