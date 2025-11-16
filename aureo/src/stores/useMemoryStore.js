import { defineStore } from "pinia";
import categories from "../data/categories.json";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    categories,
  }),

  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories[id];
    },
  },
});
