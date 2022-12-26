import { protestoPlaceService } from "@/api/protestoPlace.service";

export default {
  namespaced: true,
  state() {
    return {
      protestoPlaces: [],
    };
  },
  actions: {
    getProtestoPlaces({ commit }) {
      protestoPlaceService.getProtestoPlaces().then((response) => {
        commit("setProtestoPlaces", response);
      });
    },
  },
  mutations: {
    setProtestoPlaces(state, protestoPlaces) {
      state.protestoPlaces = protestoPlaces;
    },
  },
  getters: {
    protestoPlaces(state) {
      return state.protestoPlaces;
    },
  },
};
