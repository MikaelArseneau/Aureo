<script setup>
import { useRoute } from "vue-router";
import categories from "../data/categories.json";
 
const route = useRoute();
 
const cat = categories[route.params.id - 1]; // -1 car array commence à 0
const catKey = Object.keys(cat)[0]; // récupère "photo", "cinema", ...
const catName = cat[catKey].name; // nom de la catégorie

</script>
 
<template>
<main>
  <div class="caroussel">
    


  </div>

</main>
<footer>
  <div class="containerRoom">
    <h1 class="displayName">/ {{ catName }} / <span class="lowercase">images</span></h1>
  </div>

</footer>

 
  

  


  
</template>
 
<style scoped>

h2{
  color: aqua;
  font-size: 30px;

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

main{
position: absolute;
height: 60%;
width: 100%;
top: 25%;
display: flex;
align-items: center;
justify-content: center;
}

footer{
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