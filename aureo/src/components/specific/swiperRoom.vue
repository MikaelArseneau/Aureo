<script setup>
/* Imports des outils Vue, routing, store et composants */
import { ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useDataStore } from "../../stores/useMemoryStore";
import Modal from "../specific/modalRoom.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed } from "vue";

/* Imports des styles Swiper */
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Mousewheel, Pagination } from "swiper/modules";

/* Récupération des paramètres et des données depuis le store */
const route = useRoute();
const store = useDataStore();

const id = Number(route.params.id);
const cat = store.getCategoryById(id);
const catKey = Object.keys(cat)[0];
const catName = cat[catKey].name;
const catColor = cat[catKey].color;
const catPhoto = cat[catKey].creations;
const catTags = cat[catKey].tags;

/* Gestion du modal d affichage des images */
const modalOpen = ref(false);
const selectedPhoto = ref(null);

function modalRom(photo) {
  selectedPhoto.value = photo;
  modalOpen.value = true;
}

/* Variables liées aux filtres */
const selectedTag = ref(null);
const searchQuery = ref("");

/* Mise à jour du swiper après un changement de filtre */
let swiperInstance = null;

const updateSwiper = () => {
  if (swiperInstance) swiperInstance.update();
};
//si changement dans le selectag du radio
// redimensionne le swiper
watch(selectedTag, async () => {
  await nextTick();
  updateSwiper();
});

/* Filtre combiné : recherche textuelle + filtre par tag */
const filteredPhotos = computed(() => {
  let result = catPhoto;

  // Recherche textuelle
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();

    result = result.filter((photo) => {
      const title = photo.title?.toLowerCase() || "";
      const desc = photo.description?.toLowerCase() || "";
      return title.includes(query) || desc.includes(query);
    });
  }

  // Filtre par tag
  if (selectedTag.value) {
    result = result.filter((photo) => photo.type === selectedTag.value);
  }

  return result;
});
</script>

<template>
  <!-- Barre de recherche + filtres -->
  <div class="display_flitre">
    <div class="filtres">
      <!-- Recherche textuelle -->
      <div class="searchbar">
        <input
          type="text"
          class="barreRecherche"
          placeholder="Search.."
          v-model="searchQuery"
        />
      </div>

      <!-- Liste des tags -->
      <div class="radio_display">
        <div class="radio" v-for="tag in catTags" :key="tag">
          <label style="cursor: pointer">
            <input
              type="radio"
              name="tags"
              :value="tag"
              v-model="selectedTag"
              :style="{ accentColor: catColor }"
            />
            {{ tag }}
          </label>
        </div>

        <!-- Option Tous -->
        <div class="radio">
          <label style="cursor: pointer">
            <input
              type="radio"
              name="tags"
              value=""
              checked
              v-model="selectedTag"
              :style="{ accentColor: catColor }"
            />
            Tous
          </label>
        </div>
      </div>
    </div>

    <!-- Indication scroll -->
    <div class="defiller">
      Glisser<span class="etoile" :style="{ color: catColor }">*</span>Choisir
    </div>
  </div>

  <!-- Carrousel des images -->
  <swiper
    :space-between="8"
    :modules="[FreeMode, Pagination, Mousewheel]"
    :slides-per-view="'auto'"
    :free-mode="{ enabled: true, sticky: true, momentumBounce: false }"
    class="mySwiper"
    id="my-swiper"
    @swiper="(s) => (swiperInstance = s)"
  >
    <!-- Slide des photos -->
    <swiper-slide
      v-for="photo in filteredPhotos"
      :key="photo.id"
      v-show="
        !selectedTag || selectedTag === photo.type || selectedTag === photo.tag
      "
    >
      <img
        :src="photo.url"
        :alt="photo.description"
        @click="modalRom(photo)"
        loading="lazy"
        style="color: #1a1a1a;"
      />
    </swiper-slide>

    <!-- Affichage si aucun résultat -->
    <swiper-slide v-if="filteredPhotos.length === 0" class="aucun_resultat">
      <div class="erreur">Oupssi !!!</div>
      Aucun resultat
    </swiper-slide>
  </swiper>

  <!-- Modal des détails d une photo -->
  <Modal
    v-model="modalOpen"
    :title="selectedPhoto?.title"
    :type="selectedPhoto?.tag"
    :date="selectedPhoto?.date"
    :id="selectedPhoto?.id"
    :description="selectedPhoto?.description"
    :image="selectedPhoto?.url"
    :categoryId="cat[catKey].id"
  >
    <img
      v-if="selectedPhoto"
      :src="selectedPhoto.url"
      style="width: 100%; max-height: 50vh"
    />
  </Modal>
</template>

<style scoped>
/* Barre de recherche */
.barreRecherche {
  background-color: #1a1a1a;
  padding: 0.5em;
  color: #f3f3f3;
  border-radius: 0;
  border-width: 0;
}

/* Garde la bordure sans arrondis au focus */
.barreRecherche:focus {
  border-radius: 0;
}

/* Zone des filtres */
.filtres {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

/* Slide aucun resultat */
.aucun_resultat {
  background-color: transparent;
  color: #1a1a1a;
  font-family: "switzer";
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
}

.erreur {
  font-size: 30px;
}

/* Conteneur principal des filtres */
.display_flitre {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  text-transform: capitalize;
  font-size: clamp(10px, 1vw, 16px);
  margin-bottom: 0.8rem;
}

/* Display radio tags */
.radio_display {
  text-align: left;
  color: #1a1a1a;
  font-family: "switzer";
  font-size: 1.3em;
  display: flex;
  gap: 0.8rem;
  align-self: flex-end;
  font-weight: 600;
}

.radio {
  cursor: pointer;
}

/* Etoile en couleur */
.etoile {
  font-size: 1.4em;
}

/* Indication scroll */
.defiller {
  text-align: right;
  color: #1a1a1a;
  font-family: "switzer";
  font-size: 1.3em;
  align-self: end;
}

/* Swiper */
.swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 250px;
}

/* Images du swiper */
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}
</style>
