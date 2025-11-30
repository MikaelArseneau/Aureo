<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <div class="modal-content" role="dialog" aria-modal="true">
          <button class="modal-close" @click="close">✕</button>

          <div class="modal-header">
            <h2>{{ form.id ? "Modifier Image" : "Ajouter Image" }}</h2>
          </div>
          <!-- input titre -->
          <form @submit.prevent="submit">
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
            <!-- input description -->
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
            <!-- input credit -->
            <div class="form-group forms">
              <label for="credit">Crédit</label>
              <input
                id="credit"
                type="text"
                v-model="form.credit"
                placeholder="Ex: Crédit"
              />
            </div>
            <!-- input tags -->
            <div class="form-group forms">
              <label>Tags *</label>
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
            <!-- input image -->
            <div class="form-group forms">
              <label>Image *</label>
              <input
                type="file"
                accept="image/*"
                @change="form.image = $event.target.files[0]"
              />
            </div>

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
  props: {
    modelValue: { type: Boolean, required: true },
    categoryId: { type: [String, Number] },
    categoryTags: { type: Array },
    imageData: { type: Object, default: null },
  },
  data() {
    return {
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
  watch: {
    imageData: {
      immediate: true,
      handler(nouveau) {
        if (nouveau) {
          this.form.id = nouveau.id;
          this.form.title = nouveau.title;
          this.form.description = nouveau.description;
          this.form.credit = nouveau.credit;
          this.form.type = nouveau.type;
          this.form.url = nouveau.url;
          this.form.image = null;
        } else {
          this.resetForm();
        }
      },
    },
  },
  emits: ["update:modelValue"],
  methods: {
    close() {
      this.$emit("update:modelValue", false);
      this.resetForm();
    },
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
    submit() {
      const store = useDataStore();
      if (this.form.id) {
        const updatedImage = {
          ...this.form,
          url: this.form.image
            ? URL.createObjectURL(this.form.image)
            : this.form.url,
        };
        store.modifierImage(updatedImage, this.categoryId);
      } else {
        const New_image = {
          id: Date.now(),
          title: this.form.title,
          description: this.form.description,
          credit: this.form.credit,
          type: this.form.tag,
          tag: this.form.tag,
          url: URL.createObjectURL(this.form.image),
          categoryId: this.categoryId,
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
.forms {
  color: #1a1a1a;
  font-family: "switzer";
  font-weight: 700;
  letter-spacing: 0.2px;
}
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
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
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
  border-radius: 0;
}
.button_supprimer {
  font-family: "switzer";
  margin: auto;
}
.button:hover {
  color: #1a1a1a;
  background-color: #f3f3f3;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  margin-top: 1em;
}
input {
  max-width: 80%;
  font-family: "switzer";
}
.radio_display {
  display: flex;
  width: 100%;
  justify-content: space-around;
  max-width: 80%;
  flex-direction: row;
}
#image {
  width: 40%;
  color: #1a1a1a;
  font-family: "switzer";
}
.radio {
  display: flex;
  flex-direction: column;
  color: #1a1a1a;
  align-items: center;
  text-transform: capitalize;
  font-family: "switzer";
}

.instrument {
  font-family: "Instrument-italic";
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
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
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
