<script setup>
/* toute les choses importer dans la page*/
import { ref } from "vue";
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

const modalOpen = ref(false);
const selectedPhoto = ref(null);

function modalRom(photo) {
  selectedPhoto.value = photo;
  modalOpen.value = true;
}
</script>

<template>
  <div class="defiller">
    Glisser<span class="etoile" :style="{ color: catColor }">*</span>Choisir
  </div>
  <swiper
    :space-between="8"
    :loop="true"
    :modules="[FreeMode, Pagination, Mousewheel]"
    class="mySwiper"
  >
    <swiper-slide v-for="photo in catPhoto" :key="photo.id">
      <img :src="photo.url" alt="photo" @click="modalRom(photo)" />
    </swiper-slide>
  </swiper>

  <Modal
    v-model="modalOpen"
    :title="selectedPhoto?.title"
    :type="selectedPhoto?.type"
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
.etoile {
  font-size: 1.4em;
}
.defiller {
  text-align: right;
  color: #1a1a1a;
  font-family: "switzer";
  font-size: 1.3em;
}

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
