<script>
import { ref } from "vue";
import { useDataStore } from "../../stores/useMemoryStore";
import AjouterModalRoom from "./AjouterModalRoom.vue";

export default {
  name: "Modal",
  components: { AjouterModalRoom },
  props: {
    modelValue: Boolean,
    title: String,
    type: String,
    date: String,
    id: Number,
    description: String,
    categoryId: [String, Number],
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const addModalOpen = ref(false);
    const imageToEdit = ref(null);

    function close() {
      emit("update:modelValue", false);
    }

    function supprimerImage() {
      const store = useDataStore();
      store.supprimerImage(props.id, props.categoryId);
      close();
    }

    function ModifierImage() {
      imageToEdit.value = {
        id: props.id,
        title: props.title,
        type: props.type,
        date: props.date,
        description: props.description,
        categoryId: props.categoryId,
      };
      addModalOpen.value = true; // ouvre le modal Ajouter/Modifier
      close(); // ferme ce modal
    }

    return {
      close,
      supprimerImage,
      ModifierImage,
      addModalOpen,
      imageToEdit,
    };
  },
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <div class="modal-content">
          <button class="modal-close" @click="close">✕</button>

          <div v-if="title" class="modal-header">
            <h2>{{ title }}</h2>
            <h3>{{ type }}</h3>
            <h3>{{ description }}</h3>
          </div>

          <div class="modal-body">
            <slot />
            <div class="date">{{ date }}</div>
          </div>

          <div class="modal-footer">
            <div class="button" @click="ModifierImage">
              <p class="button_supprimer">Modifier</p>
            </div>
            <div class="button" @click="supprimerImage">
              <p class="button_supprimer">Supprimer</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Modal Ajouter/Modifier -->
    <AjouterModalRoom
      v-model="addModalOpen"
      :category-id="imageToEdit?.categoryId || null"
      :image-data="imageToEdit"
      :category-tags="[imageToEdit?.type]"
    />
  </Teleport>
</template>

<style scoped>
.date {
  color: #1a1a1a;
  font-family: "instrument";
  text-align: right;
  margin-top: 2px;
}
h3 {
  color: black;
  margin-top: 0px;
  font-family: "instrument";
}
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
}
.button_supprimer {
  font-family: "switzer";
  margin: auto;
}
.button:hover {
  color: #1a1a1a;
  background-color: #f3f3f3;
}
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

.modal-content {
  background: white;
  max-width: 500px;
  max-height: 300px;
  width: 80%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

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

/* Header */
.modal-header {
  padding: 16px 24px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  margin: 0;
  color: #111827;
  font-family: "switzer";
  font-weight: 600;
  text-transform: capitalize;
}
.modal-header h3 {
  margin: 0;
  color: #111827;
}

/* Body */
.modal-body {
  padding: 24px;
}

/* Footer */
.modal-footer {
  padding-right: 32px;
  padding-left: 32px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

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
