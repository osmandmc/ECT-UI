import { companyService } from "@/api/company.service";

export default {
  namespaced: true,
  state() {
    return {
      companies: [],
    };
  },
  actions: {
    getCompanies({ commit }) {
      companyService.getCompanies().then((response) => {
        commit("setCompanies", response);
      });
    },
  },
  mutations: {
    setCompanies(state, companies) {
      state.companies = companies;
    },
  },
  getters: {
    companies(state) {
      return state.companies;
    },
  },
};
