import { categoryService } from "@/api/category.service";

export default {
  namespaced: true,
  state() {
    return {
      categories: [],
    };
  },
  actions: {
    getCategories({ commit }) {
      categoryService.getCategories().then((response) => {
        commit("setCategories", response);
      });
    },
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  getters: {
    categories(state) {
      return state.categories;
    },
  },
};
