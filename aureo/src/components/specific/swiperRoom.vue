<script setup>
import { useRoute } from "vue-router";
import { useDataStore } from "../../stores/useMemoryStore";


const route = useRoute();
const store = useDataStore();

const id = Number(route.params.id);

const cat = store.getCategoryById(id);
const catKey = Object.keys(cat)[0];
const catName = cat[catKey].name;
const catPhoto = cat[catKey].creations;
console.log(catPhoto)
</script>
<template>
  <swiper :slidesPerView="8.7" 
  :spaceBetween="30" :freeMode="true" :mousewheel="true" :loop="true" :modules="modules" class="mySwiper" > <swiper-slide v-for="photo in catPhoto" :key="photo.id"> <img :src="photo.url" alt="Cat photo" /> </swiper-slide> </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/mousewheel';
    import 'swiper/css/free-mode';
    import 'swiper/css/pagination';

  
    // import required modules
    import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
            direction: 'horizontal',
            mousewheel: true, 
          modules: [FreeMode, Pagination, Mousewheel],
        };
      },
    };
  </script>
  <style scoped>

.swiper {
  width: 100%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
  