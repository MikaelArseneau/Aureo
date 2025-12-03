<template>
  <!-- La modale est téléportée dans <body> pour éviter les problèmes de placement et de z-index -->
  <Teleport to="body">
    <!-- Animation de transition -->
    <Transition name="modal">
      <!-- Overlay semi-transparent. Le clic .self ferme uniquement si on clique sur le fond -->
      <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <!-- Contenu principal de la modale -->
        <div class="modal-content" role="dialog" aria-modal="true">
          <!-- Bouton de fermeture -->
          <button class="modal-close" @click="close">✕</button>

          <!-- En-tete de la modale -->
          <div class="modal-header">
            <h2>{{ form.id ? "Modifier Image" : "Ajouter Image" }}</h2>
          </div>

          <!-- Formulaire principal -->
          <form @submit.prevent="submit">
            <!-- Champ titre -->
            <div class="form-group forms">
              <label for="title">Titre *</label>
              <input
                id="title"
                type="text"
                v-model="form.title"
                placeholder="Ex: Mon chien Bilou"
                required
              />
            </div>

            <!-- Champ description -->
            <div class="form-group forms">
              <label for="description">Description *</label>
              <input
                id="description"
                type="text"
                v-model="form.description"
                placeholder="Ex: Bilou qui donne la patte"
                required
              />
            </div>

            <!-- Champ crédit -->
            <div class="form-group forms">
              <label for="credit">Crédit</label>
              <input
                id="credit"
                type="text"
                v-model="form.credit"
                placeholder="Ex: Crédit"
              />
            </div>

            <!-- Sélecteur de tags -->
            <div class="form-group forms">
              <label>Tags *</label>

              <!-- Liste des tags provenant de categoryTags -->
              <div class="radio_display">
                <div class="radio" v-for="tag in categoryTags" :key="tag">
                  {{ tag }}
                  <input
                    type="radio"
                    name="tag"
                    v-model="form.tag"
                    :value="tag"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Input d upload d image -->
            <div class="form-group forms">
              <label>Image *</label>
              <input
                type="file"
                accept="image/*"
                @change="form.image = $event.target.files[0]"
                required
              />
            </div>

            <!-- Bouton de validation -->
            <div class="modal-footer">
              <button class="button">
                {{ form.id ? "Modifier" : "Ajouter" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { useDataStore } from "../../stores/useMemoryStore";

export default {
  name: "Modal",

  // Props envoyées par le parent
  props: {
    modelValue: { type: Boolean, required: true }, // affiche ou non la modale
    categoryId: { type: [String, Number] }, // id de catégorie
    categoryTags: { type: Array }, // liste de tags disponibles
    imageData: { type: Object, default: null }, // données si édition
  },

  data() {
    return {
      // Informations contrôlées du formulaire
      form: {
        id: null,
        title: "",
        description: "",
        credit: "",
        tag: "",
        image: null,
        url: "",
      },
    };
  },

  // Mise à jour du formulaire si imageData change
  watch: {
    imageData: {
      immediate: true,
      handler(nouveau) {
        if (nouveau) {
          // Remplissage si on modifie
          this.form.id = nouveau.id;
          this.form.title = nouveau.title;
          this.form.description = nouveau.description;
          this.form.credit = nouveau.credit;
          this.form.type = nouveau.type;
          this.form.url = nouveau.url;
          this.form.image = null; // reset du fichier
        } else {
          // Reset complet si on ajoute une nouvelle image
          this.resetForm();
        }
      },
    },
  },

  emits: ["update:modelValue"],

  methods: {
    // Ferme la modale
    close() {
      this.$emit("update:modelValue", false);
      this.resetForm();
    },

    // Vide tous les champs
    resetForm() {
      this.form = {
        id: null,
        title: "",
        tag: "",
        description: "",
        credit: "",
        image: null,
        url: "",
      };
    },

    // Soumission du formulaire
    submit() {
      const store = useDataStore();

      // Cas : modification
      if (this.form.id) {
        const updatedImage = {
          ...this.form,
          // Nouvelle image convertie en URL sinon garder l ancienne
          url: this.form.image
            ? URL.createObjectURL(this.form.image)
            : this.form.url,
        };

        store.modifierImage(updatedImage, this.categoryId);
      }
      // Cas : ajout
      else {
        const New_image = {
          id: Date.now(),
          title: this.form.title,
          description: this.form.description,
          credit: this.form.credit,
          type: this.form.tag,
          tag: this.form.tag,
          url: URL.createObjectURL(this.form.image),
          categoryId: this.categoryId,

          // Date formatée AAAA-MM-JJ
          date:
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate(),
        };

        store.ajouter(New_image, this.categoryId);
      }

      this.close();
    },
  },
};
</script>

<style scoped>
/* Styles des champs du formulaire */
.forms {
  color: #1a1a1a;
  font-family: "switzer";
  font-weight: 700;
  letter-spacing: 0.2px;
}

/* Style date */
.date {
  color: #1a1a1a;
  font-family: "instrument";
  text-align: right;
  margin-top: 2px;
}

/* Bouton supprimer */
h3 {
  color: black;
  margin-top: 0px;
  font-family: "instrument";
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}

/* Bouton principal */
.button {
  background-color: #111827;
  width: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 6px;
  cursor: pointer;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f3f3f3;

  border-width: 1px;
  border-color: #111827;
  border-style: solid;

  transition: all 0.3s ease-in-out;
  border-radius: 0;
}

/* Texte interne du bouton supprimer */
.button_supprimer {
  font-family: "switzer";
  margin: auto;
}

/* Hover du bouton */
.button:hover {
  color: #1a1a1a;
  background-color: #f3f3f3;
}

/* Groupe de champs */
.form-group {
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  margin-top: 1em;
}

/* Style des inputs */
input {
  max-width: 80%;
  font-family: "switzer";
}

/* Conteneur des radios */
.radio_display {
  display: flex;
  width: 100%;
  justify-content: space-around;
  max-width: 80%;
  flex-direction: row;
}

/* Champ image */
#image {
  width: 40%;
  color: #1a1a1a;
  font-family: "switzer";
}

/* Element individuel d un tag radio */
.radio {
  display: flex;
  flex-direction: column;
  color: #1a1a1a;
  align-items: center;
  text-transform: capitalize;
  font-family: "switzer";
}

/* Police instrument */
.instrument {
  font-family: "Instrument-italic";
}

/* Overlay sombre de la modale */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
}

/* Bloc principal de la modale */
.modal-content {
  background: white;
  max-width: 500px;
  max-height: 300px;
  width: 80%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

/* Bouton X de fermeture */
.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}

.modal-close:hover {
  color: #111827;
}

/* Header de la modale */
.modal-header {
  padding: 16px 24px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  margin: 0;
  color: #111827;
  font-family: "switzer";
  font-weight: 600;
}

/* Corps non utilisé ici mais prêt */
.modal-body {
  padding: 24px;
}

/* Footer avec bouton */
.modal-footer {
  padding-right: 32px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Animation d apparition de la modale */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

/* Animation zoom */
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}
</style>
