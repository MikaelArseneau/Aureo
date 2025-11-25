<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <div class="modal-content" role="dialog" aria-modal="true">
          <button class="modal-close" @click="close" aria-label="Close">
            ✕
          </button>

          <div class="modal-header">
            <h2>Formulaire d'ajout</h2>
          </div>
          <form>
            <div class="form-group forms">
              <label for="title">Titre <span class="instrument">*</span></label>
              <input
                id="title"
                type="text"
                required
                placeholder="Ex: Mon chien Bilou"
                v-model="form.title"
              />
            </div>
            <div class="form-group forms">
              <label for="description"
                >Description <span class="instrument">*</span></label
              >
              <input
                id="description"
                type="text"
                required
                placeholder="Ex: Bilou qui donne la patte"
                v-model="form.description"
              />
            </div>
            <div class="form-group forms">
              <label for="description">Crédit</label>
              <input
                id="credit"
                type="text"
                required
                placeholder="Ex: Crédit"
                v-model="form.credit"
              />
            </div>
            <div class="form-group">
              <label for="description"
                class="forms">Tags <span class="instrument">*</span></label
              >
              <div class="radio_display">
                <div class="radio" v-for="tag in categoryTags">
                  {{ tag
                  }}<input
                    type="radio"
                    name="tags"
                    required
                    :value="tag"
                    v-model="form.tag"
                  />
                </div>
              </div>
            </div>
            <!-- Upload image -->
            <div class="form-group">
              <label for="image forms">Image <span class="instrument">*</span></label>
              <input
                id="image"
                type="file"
                accept="image/*"
                @change="form.image = $event.target.files[0]"
              />
            </div>
          </form>

          <div class="modal-body">
            <slot> </slot>
            <div class="date">{{ date }}</div>
          </div>

          <div class="modal-footer">
            <div class="button" @click="ajouter()">
              <p class="button_supprimer">Ajouter</p>
            </div>
          </div>
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
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    categoryId: {
      type: [String, Number],
    },
    categoryTags: {
      type: Array,
    },
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        credit: "",
        tag: "",
        image: null,
      },
    };
  },
  emits: ["update:modelValue"],
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
    ajouter() {
      if (
        this.form.title != "" &&
        this.form.description != "" &&
        this.form.tag != "" &&
        this.form.image != null
      ) {
        const New_image = {
          id: Date.now(),
          title: this.form.title,
          description: this.form.description,
          credit: this.form.credit,
          type: this.form.tag,
          url: URL.createObjectURL(this.form.image),
          categoryId: this.categoryId,
          date:
            new Date().getFullYear() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getDay(),
        };
        const store = useDataStore();
        store.ajouter(New_image, this.categoryId);
        this.$emit("update:modelValue", false);
        this.form.title = "";
        this.form.description = "";
        this.form.tag = "";
        this.form.credit = "";
      }
    },
  },
};
</script>

<style scoped>
.forms{
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
