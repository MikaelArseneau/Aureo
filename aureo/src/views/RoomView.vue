<script setup>
import { useRoute } from "vue-router";
import { useDataStore } from "../stores/useMemoryStore";
import swiperRoom from "../components/specific/swiperRoom.vue";
import AjouterModalRoom from "../components/specific/AjouterModalRoom.vue"; 
import { ref } from "vue";

const route = useRoute();
const store = useDataStore();

const id = Number(route.params.id);

const cat = store.getCategoryById(id);
const catKey = Object.keys(cat)[0];
const catName = cat[catKey].name;
const catColor = cat[catKey].color;
const catPhoto = cat[catKey].creations;
console.log(catPhoto);
const modalOpen = ref(false);
const selectedPhoto = ref(null);

function modalRoom() {
  modalOpen.value = true;
}

</script>

<template>
  <div class="display_milieu">
    <div class="texte_milieu">C'est <span class="instrument" :style="{ color: catColor }">ici</span> que <span class="instrument" :style="{ color: catColor }">vos inspirations</span><br></br> se<span class="instrument" :style="{ color: catColor }"> rencontrent</span>*</div>
   <button class="btn_ajouter"@click="modalRoom()":style="{ backgroundColor: catColor }"> En Ajouter</button>
  </div>
  <main>
    
   <AjouterModalRoom
    v-model="modalOpen"
    :title="selectedPhoto?.title"
    :type="selectedPhoto?.type"
    :date="selectedPhoto?.date"
    :id="selectedPhoto?.id"
   
  >
    <img
      v-if="selectedPhoto"
      :src="selectedPhoto.url"
      style="width: 100%; max-height: 60vh"
    />
  </AjouterModalRoom>
    <div class="caroussel">
      <swiper-room></swiper-room>
    </div>
  </main>

  <footer>
    <div class="containerRoom">
      <h1 class="displayName">
        / {{ catName }} / <span class="lowercase">images</span>
      </h1>
    </div>
  </footer>
</template>

<style scoped>
.instrument{
  font-family: "Instrument-italic";
  font-style:italic;
}
.display_milieu{
  display: block;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  flex-direction: column;
  text-align: center;
font-family: "switzer";
color: #1a1a1a;
margin-top: -175px;
}
.texte_milieu{
  font-size: 4em;
}

.btn_ajouter{
cursor: pointer;
z-index: 1000;
width: 25%;
align-self: center;
color: #1a1a1a;
font-family: "Instrument-italic";
font-weight: 600;
font-size: 1.5em;
}
.btn_ajouter:hover{
cursor: pointer;
border-color:#1a1a1a;
}
.test {
  color: #1a1a1a;
}
.caroussel {
  margin-top: 500px;
  position: relative;
  user-select: none;
  overflow: hidden;
  padding: 20px;
  height: 300px;
  pointer-events: all;
}

.lowercase {
  text-transform: lowercase;
  font-size: 0.6em;
}

main {
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
}

footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
}

.displayName {
  font-family: "Instrument", serif;
  font-size: 2em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin: 40px;
}
</style>