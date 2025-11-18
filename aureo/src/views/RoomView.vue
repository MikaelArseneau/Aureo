<script setup>
import { useRoute } from "vue-router";
import { useDataStore } from "../stores/useMemoryStore";
import swiperRoom from "../components/specific/swiperRoom.vue";

const route = useRoute();
const store = useDataStore();

const id = Number(route.params.id);

const cat = store.getCategoryById(id);
const catKey = Object.keys(cat)[0];
const catName = cat[catKey].name;
const catPhoto = cat[catKey].creations;
console.log(catPhoto);
</script>

<template>
  <main>
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
.test {
  color: #1a1a1a;
}
.caroussel {
  margin-top: 600px;
  position: relative;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  padding: 20px;
  height: 300px;
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
