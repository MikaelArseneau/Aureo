import {
  defineStore
} from "pinia";
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

      const store = useDataStore();
      const cat = store.getCategoryById(categoryId - 1);
      const catKey = Object.keys(cat)[0];
      alert(catKey);
      const memoryIndex = cat[catKey].creations[imageId - 1];

      alert(memoryIndex);

      if (memoryIndex !== -1) {
        alert("test")
        cat[catKey].creations.splice(memoryIndex, 1);
        // Sauvegarder dans localStorage (optionnel)
        // ...
        return true;
      }




    },
    ajouter(imageId, categoryId) {
      alert(`Image ID: ${imageId}, Catégorie ID: ${categoryId}`);
    },
  },
});