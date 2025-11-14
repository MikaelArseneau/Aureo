<script setup>
import { useRoute } from "vue-router";
import categories from "../data/categories.json";
 
const route = useRoute();
 
const cat = categories[route.params.id - 1]; // -1 car array commence à 0
const catKey = Object.keys(cat)[0]; // récupère "photo", "cinema", ...
const catName = cat[catKey].name; // nom de la catégorie

</script>
 
<template>
  <div class="containerRoom">
    <h1 class="displayName">/ {{ catName }} / <span class="lowercase">images</span></h1>
  </div>
  <h2>allo</h2>

  


  
</template>
 
<style scoped>

h2{
  position: absolute;
  color: aqua;
  font-size: 30px;
  top: 0px;
}

.room-view {
  padding: 20px;
}
 
.room-view h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.lowercase {
  text-transform: lowercase;
  font-size: 0.6em;
}

.containerRoom {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
}

.displayName {
  font-family: "Instrument", serif;
  font-size: 2em;
  text-transform: uppercase;
  color: #1a1a1a;
  margin: 40px;

}
</style>