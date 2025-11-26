<script setup>
/* toute les choses importer dans la page*/
import { ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useDataStore } from "../../stores/useMemoryStore";
import Modal from "../specific/modalRoom.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Mousewheel, Pagination } from "swiper/modules";

// --- Swiper + données ---
const route = useRoute();
const store = useDataStore();

/* va chercher les images en détail*/
const id = Number(route.params.id);
const cat = store.getCategoryById(id);
const catKey = Object.keys(cat)[0];
const catName = cat[catKey].name;
const catColor = cat[catKey].color;
const catPhoto = cat[catKey].creations;
const catTags = cat[catKey].tags;

// --- Modal ---
const modalOpen = ref(false);
const selectedPhoto = ref(null);

function modalRom(photo) {
  selectedPhoto.value = photo;
  modalOpen.value = true;
}

// --- Filtre Tags ---
const selectedTag = ref(null);

// --- Swiper instance ---
let swiperInstance = null;

// Recalcul automatique du slider quand le filtre change
const updateSwiper = () => {
  if (swiperInstance) swiperInstance.update();
};

watch(selectedTag, async () => {
  await nextTick(); // attend que le DOM retire/affiche les images filtrées
  updateSwiper(); // redimensionne correctement le swiper
});
</script>

<template>
  <div class="display_flitre">
    <div class="radio_display">
      <div class="radio" v-for="tag in catTags">
        <input
          type="radio"
          name="tags"
          :value="tag"
          v-model="selectedTag"
          :style="{ accentColor: catColor }"
        />
        {{ tag }}
      </div>

      <div class="radio">
        <input
          checked
          type="radio"
          name="tags"
          value=""
          v-model="selectedTag"
          :style="{ accentColor: catColor }"
        />
        Tous
      </div>
    </div>

    <div class="defiller">
      Glisser<span class="etoile" :style="{ color: catColor }">*</span>Choisir
    </div>
  </div>

  <swiper
    :space-between="8"
    :modules="[FreeMode, Pagination, Mousewheel]"
    :slides-per-view="'auto'"
    :free-mode="{ enabled: true, sticky: true, momentumBounce: false }"
    class="mySwiper"
    id="my-swiper"
    @swiper="(s) => (swiperInstance = s)"
  >
    >
    <swiper-slide
      v-for="photo in catPhoto"
      :key="photo.id"
      v-show="!selectedTag || selectedTag === photo.type"
    >
      <img
        :src="photo.url"
        alt="photo"
        @click="modalRom(photo)"
        loading="lazy"
      />
    </swiper-slide>
  </swiper>

  <Modal
    v-model="modalOpen"
    :title="selectedPhoto?.title"
    :type="selectedPhoto?.tag"
    :date="selectedPhoto?.date"
    :id="selectedPhoto?.id"
    :categoryId="cat[catKey].id"
  >
    <img
      v-if="selectedPhoto"
      :src="selectedPhoto.url"
      style="width: 100%; max-height: 60vh"
    />
  </Modal>
</template>

<style scoped>
.display_flitre {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  text-transform: capitalize;
}

.radio_display {
  text-align: left;
  color: #1a1a1a;
  font-family: "switzer";
  font-size: 1.3em;
  display: flex;
  gap: 0.8rem;
  align-self: flex-end;
}

.radio {
  cursor: pointer;
}

.etoile {
  font-size: 1.4em;
}

.defiller {
  text-align: right;
  color: #1a1a1a;
  font-family: "switzer";
  font-size: 1.3em;
  position: relative;
  align-self: end;
}

/* SWIPER */
.swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 250px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}
</style>
