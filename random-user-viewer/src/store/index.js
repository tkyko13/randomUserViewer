import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    historyUser: []
  },
  getters: {
    historyUser(state) {
      return state.historyUser;
    }
  },
  mutations: {
    pushHistory(state, payload) {
      state.historyUser.unshift(payload.user);
      if (state.historyUser.length > 5) {
        state.historyUser.pop();
      }
    }
  },
  actions: {
    doUpdateHistory({ commit }, user) {
      commit("pushHistory", { user });
    }
  }
});

export default store;
