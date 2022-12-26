import { resistanceReasonService } from "@/api/resistanceReason.service";

export default {
  namespaced: true,
  state() {
    return {
      resistanceReasons: [],
    };
  },
  actions: {
    getResistanceReasons({ commit }) {
      resistanceReasonService.getResistanceReasons().then((response) => {
        commit("setResistanceReasons", response);
      });
    },
  },
  mutations: {
    setResistanceReasons(state, resistanceReasons) {
      state.resistanceReasons = resistanceReasons;
    },
  },
  getters: {
    resistanceReasons(state) {
      return state.resistanceReasons;
    },
  },
};
