import { paramService } from "@/api/param.service";

export default {
  namespaced: true,
  state() {
    return {
      employeeCounts: [],
      employmentTypes: [],
      genders: [],
      protestoEmployeeCounts: [],
      interventionTypes: [],
      tradeUnionAuthorities: [],
      tradeUnions: [],
    };
  },
  actions: {
    getEmployeeCounts({ commit }) {
      paramService.getEmployeeCounts().then((response) => {
        commit("setEmployeeCounts", response);
      });
    },
    getEmploymentTypes({ commit }) {
      paramService.getEmploymentTypes().then((response) => {
        commit("setEmploymentTypes", response);
      });
    },
    getGenders({ commit }) {
      paramService.getGenders().then((response) => {
        commit("setGenders", response);
      });
    },
    getProtestoEmployeeCounts({ commit }) {
      paramService.getProtestoEmployeeCounts().then((response) => {
        commit("setProtestoEmployeeCounts", response);
      });
    },
    getInterventionTypes({ commit }) {
      paramService.getInterventionTypes().then((response) => {
        commit("setInterventionTypes", response);
      });
    },
    getTradeUnionAuthorities({ commit }) {
      paramService.getTradeUnionAuthorities().then((response) => {
        commit("setTradeUnionAuthorities", response);
      });
    },
    getTradeUnions({ commit }) {
      paramService.getTradeUnions().then((response) => {
        commit("setTradeUnions", response);
      });
    },
  },
  mutations: {
    setEmployeeCounts(state, employeeCounts) {
      state.employeeCounts = employeeCounts;
    },
    setEmploymentTypes(state, employmentTypes) {
      state.employmentTypes = employmentTypes;
    },
    setGenders(state, genders) {
      state.genders = genders;
    },
    setProtestoEmployeeCounts(state, protestoEmployeeCounts) {
      state.protestoEmployeeCounts = protestoEmployeeCounts;
    },
    setInterventionTypes(state, interventionTypes) {
      state.interventionTypes = interventionTypes;
    },
    setTradeUnionAuthorities(state, tradeUnionAuthorities) {
      state.tradeUnionAuthorities = tradeUnionAuthorities;
    },
    setTradeUnions(state, tradeUnions) {
      state.tradeUnions = tradeUnions;
    },
  },
  getters: {
    employeeCounts(state) {
      return state.employeeCounts;
    },
    employmentTypes(state) {
      return state.employmentTypes;
    },
    genders(state) {
      return state.genders;
    },
    protestoEmployeeCounts(state) {
      return state.protestoEmployeeCounts;
    },
    interventionTypes(state) {
      return state.interventionTypes;
    },
    tradeUnionAuthorities(state) {
      return state.tradeUnionAuthorities;
    },
    tradeUnions(state) {
      return state.tradeUnions;
    },
  },
};
