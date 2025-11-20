import { defineStore } from "pinia";
import categoriesJson from "../data/categories.json";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    categories: categoriesJson,
  }),

  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories[id];
    },
  },
  actions: {
    supprimerImage(imageId, categoryId) {
      alert(`Image ID: ${imageId}, Catégorie ID: ${categoryId}`);
    },
    ajouter(imageId, categoryId) {
      alert(`Image ID: ${imageId}, Catégorie ID: ${categoryId}`);
    },
  },
});
