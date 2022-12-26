import { corporationService } from "@/api/corporation.service";

export default {
  namespaced: true,
  state() {
    return {
      corporations: [],
    };
  },
  actions: {
    getCorporations({ commit }) {
      corporationService.getCorporations().then((response) => {
        commit("setCorporations", response);
      });
    },
  },
  mutations: {
    setCorporations(state, corporations) {
      state.corporations = corporations;
    },
  },
  getters: {
    corporations(state) {
      return state.corporations;
    },
  },
};
