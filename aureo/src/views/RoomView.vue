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
const catPhoto = cat[catKey].creations;
console.log(catPhoto);
const modalOpen = ref(false);
const selectedPhoto = ref(null);

function modalRoom() {
  alert("allo");
  modalOpen.value = true;
}

</script>

<template>
  <div class="texte_milieu">
    <div class="">C'est <span class="instrument">ici</span> que <span class="instrument">vos inspirations</span><br></br> se rencontrent</div>
   <button class="test"@click="modalRoom()">Ajouter</button>
  </div>
  <main>
    
   <AjouterModalRoom
    v-model="modalOpen"
    :title="selectedPhoto?.title"
    :type="selectedPhoto?.type"
    :date="selectedPhoto?.date"
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
  font-family: "Instrument", serif;
  font-style:italic;
}
.texte_milieu{
  display: block;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  flex-direction: column;
  text-align: center;
font-family: "switzer";
font-size: 3em;
color: #1a1a1a;
}
.test{
background-color: aliceblue;
cursor: pointer;
z-index: 1000;
width: 30%;
align-self: center;
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