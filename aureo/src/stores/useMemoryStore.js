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
      const store = useDataStore();

      const cat = store.getCategoryById(categoryId - 1);
      const catKey = Object.keys(cat)[0];

      // const memoryIndex = cat[catKey].creations[imageId];

      const creation_choisie = cat[catKey].creations.findIndex(
        (m) => m.id === imageId
      );

      if (creation_choisie !== -1) {
        cat[catKey].creations.splice(creation_choisie, 1);
        // Sauvegarder dans localStorage (optionnel)
        // ...
        return true;
      } else {
        alert("introuvable");
      }
    },
    ajouter(New_image, categoryId) {
      const store = useDataStore();
      const cat = store.getCategoryById(categoryId - 1);
      const catKey = Object.keys(cat)[0];
      cat[catKey].creations.push(New_image);
    },
  },
});
