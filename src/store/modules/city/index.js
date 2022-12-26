import { cityService } from "@/api/city.service";

export default {
  namespaced: true,
  state() {
    return {
      cities: [],
    };
  },
  actions: {
    getCities({ commit }) {
      cityService.getCities().then((response) => {
        commit("setCities", response);
      });
    },
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
  },
  getters: {
    cities(state) {
      return state.cities;
    },
  },
};
