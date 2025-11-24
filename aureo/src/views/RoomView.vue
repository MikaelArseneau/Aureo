<script setup>
import { useRoute } from "vue-router";
import { useDataStore } from "../stores/useMemoryStore";
import swiperRoom from "../components/specific/swiperRoom.vue";
import AjouterModalRoom from "../components/specific/AjouterModalRoom.vue"; 
import { ref,onMounted } from "vue";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);
const route = useRoute();
const store = useDataStore();

const id = Number(route.params.id);

const cat = store.getCategoryById(id);
const catKey = Object.keys(cat)[0];
const catName = cat[catKey].name;
const catColor = cat[catKey].color;
const catPhoto = cat[catKey].creations;
const catTags = cat[catKey].tags;
console.log(catPhoto);
const modalOpen = ref(false);
const selectedPhoto = ref(null);
const texte = ref(null);
function modalRoom() {
  modalOpen.value = true;
}
onMounted(() => {

  const split = new SplitText(texte.value, { type: "words" });
  gsap.from(split.words, {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    delay:0.4,
    ease: "power3.out"
  });
  let tl=gsap.timeline();
  let button=document.getElementsByClassName("btn_ajouter");
   tl.fromTo(
        button,
        { y: 5,opacity:0 },
        {delay:1.8,
          duration: 0.2,
          y:0,
          ease: "power1.in",
          opacity:1
        }
      );
});


</script>

<template>
  <!--texte qui s'affiche au milieu-->
  <div class="display_milieu">
    <div class="texte_milieu" ref="texte">C'est <span class="instrument" :style="{ color: catColor }">ici</span> que <span class="instrument" :style="{ color: catColor }">vos inspirations</span><br></br> se<span class="instrument" :style="{ color: catColor }"> rencontrent</span>*</div>
    
    <!--Bouton ajouter-->
   <button class="btn_ajouter"@click="modalRoom()":style="{ backgroundColor: catColor}"> En Ajouter</button>

  </div>



  <main>
    
   <AjouterModalRoom
    v-model="modalOpen"
  :title="selectedPhoto?.title || ''"
  :type="selectedPhoto?.type || ''"
  :date="selectedPhoto?.date || ''"
  :id="selectedPhoto?.id || ''"
  :categoryId="cat[catKey].id"
  :categoryTags="cat[catKey].tags"
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
opacity: 0;
z-index: 1000;
width: 25%;
align-self: center;
color: #1a1a1a;
font-family: "Instrument-italic";
font-weight: 600;
font-size: 1.5em;
transition: all 0.4s ease-in-out;
}
.btn_ajouter:hover{
cursor: pointer;
border-color:#1a1a1a;
color: #f3f3f3;
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

@media screen and (max-width: 600px) {
    .btn_ajouter {
        width: 50%;
        font-size: 1.2em; 
    }
}
@media screen and (max-width: 450px) {
    
   .texte_milieu{
  font-size: 3em;
}
}

</style>