import { resistanceService } from "@/api/resistance.service";

export default {
  getResistances({ commit }) {
    resistanceService.getResistances().then((response) => {
      commit("setResistances", response);
    });
  },
  getSelected({ commit }, id) {
    console.log("get" + id);
    resistanceService.getThis(id).then((response) => {
      commit("setSelected", response);
    });
  },
  getSelectedProtesto({ commit }, id) {
    resistanceService.getProtesto(id).then((response) => {
      commit("setSelectedProtesto", response);
    });
  },
};
