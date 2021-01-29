import createPersistedState from "vuex-persistedstate";
import Vuex from "vuex";
import state from "./state/index";
import mutations from "./mutation/index";

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
