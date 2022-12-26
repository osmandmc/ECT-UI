import { protestoTypeService } from "@/api/protestoType.service";

export default {
  namespaced: true,
  state() {
    return {
      protestoTypes: [],
    };
  },
  actions: {
    getProtestoTypes({ commit }) {
      protestoTypeService.getProtestoTypes().then((response) => {
        commit("setProtestoTypes", response);
      });
    },
  },
  mutations: {
    setProtestoTypes(state, protestoTypes) {
      state.protestoTypes = protestoTypes;
    },
  },
  getters: {
    protestoTypes(state) {
      return state.protestoTypes;
    },
  },
};
