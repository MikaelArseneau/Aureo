<script setup></script>
<template>
  <AppHeader />
  <router-link :to="{ name: 'room', params: { id: id_cat } }" class="bouton">
    <p>Visiter la salle</p>
  </router-link>
  <div class="fleche_display">
    <!-- flèche droite (next) -->
    <svg
      class="fleche custom-next"
      width="64"
      height="30"
      viewBox="0 0 64 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.6654 0C45.9921 3.98601 48.5775 7.4597 52.0507 9.92319C55.524 12.3867 59.7069 13.7137 64 13.7137V16.2863C59.7069 16.2863 55.524 17.6133 52.0507 20.0768C48.5775 22.5403 45.9921 26.014 44.6654 30L42.1592 29.205C43.6578 24.7023 46.5784 20.7783 50.5018 17.9955C51.402 17.357 52.3449 16.7871 53.3213 16.2863H0V13.7137H53.3213C52.3449 13.2129 51.402 12.643 50.5018 12.0045C46.5784 9.22169 43.6578 5.29771 42.1592 0.79499L44.6654 0Z"
        fill="black"
      />
    </svg>

    <!-- flèche gauche (prev) -->
    <svg
      class="fleche gauche custom-prev"
      width="64"
      height="30"
      viewBox="0 0 64 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.6654 0C45.9921 3.98601 48.5775 7.4597 52.0507 9.92319C55.524 12.3867 59.7069 13.7137 64 13.7137V16.2863C59.7069 16.2863 55.524 17.6133 52.0507 20.0768C48.5775 22.5403 45.9921 26.014 44.6654 30L42.1592 29.205C43.6578 24.7023 46.5784 20.7783 50.5018 17.9955C51.402 17.357 52.3449 16.7871 53.3213 16.2863H0V13.7137H53.3213C52.3449 13.2129 51.402 12.643 50.5018 12.0045C46.5784 9.22169 43.6578 5.29771 42.1592 0.79499L44.6654 0Z"
        fill="black"
      />
    </svg>
  </div>

  <div></div>

  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :navigation="{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }"
    :modules="modules"
    class="mySwiper"
    @swiper="onSwiperInit"
    @slideChange="onSlideChange"
  >
    <img
      class="image autre1"
      id="image1"
      :src="currentImage"
      alt="category demo"
    />
    <img
      class="image autre2"
      id="image2"
      :src="currentImage"
      alt="category demo"
    />
    <img
      class="image autre3"
      id="image3"
      :src="currentImage"
      alt="category demo"
    />
    <img
      class="image autre4"
      id="image4"
      :src="currentImage"
      alt="category demo"
    />
    <swiper-slide>
      <div class="room_title photo">
        *Photo<span class="titre_photo2">graphie*</span>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="room_title video">
        vidéo <span class="cinema">&</span>cinéma
      </div></swiper-slide
    >

    <swiper-slide
      ><div class="room_title design">
        Design <span class="graphique">&nbsp;graphique&nbsp;</span>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="room_title illustration">
        illustration <span class="art">art numérique</span>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="room_title architecture">
        architecture
        <div class="ligne"></div>
        <span class="art">design intérieur</span>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="room_title mode">
        mode <span class="et"> & </span> <span class="style">style</span>
      </div></swiper-slide
    >
  </swiper>
</template>

<script>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";
import categories from "../data/categories.json";
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const modules = [Pagination, Navigation];
    const currentSlide = ref(0);
    const currentImage = ref("");
    const id_cat = ref(1);

    const demoImages = [
      categories[0].photo.photodemo,
      categories[1].cinema.photodemo,
      categories[2].design.photodemo,
      categories[3].illustration.photodemo,
      categories[4].architecture.photodemo,
      categories[5].style.photodemo,
    ];

    const onSwiperInit = (swiper) => {
      currentSlide.value = swiper.realIndex;
      currentImage.value = demoImages[swiper.realIndex];
      id_cat.value = swiper.realIndex;
    };

    const onSlideChange = (swiper) => {
      currentSlide.value = swiper.realIndex;
      currentImage.value = demoImages[swiper.realIndex];
      console.log(swiper.realIndex);
      id_cat.value = swiper.realIndex;
    };

    onMounted(() => {
      const swiper = document.getElementsByClassName("swiper");
      const image1 = document.getElementById("image1");
      const image2 = document.getElementById("image2");
      const image3 = document.getElementById("image3");
      const image4 = document.getElementById("image4");
      let tl_swiper = gsap.timeline();
      let tl = gsap.timeline();
      let tl2 = gsap.timeline();
      let tl3 = gsap.timeline();
      let tl4 = gsap.timeline();
      tl.delay(2);
      tl.fromTo(
        image1,
        { bottom: "-15%" },
        {
          duration: 20,
          bottom: "110%",
          repeat: -1,
          ease: "none",
        }
      );
      tl2.delay(6);
      tl2.fromTo(
        image2,
        { bottom: "-15%" },
        {
          duration: 25,
          bottom: "110%",
          repeat: -1,
          ease: "none",
        }
      );
      tl3.delay(10);
      tl3.fromTo(
        image3,
        { bottom: "-15%" },
        {
          duration: 25,
          bottom: "110%",
          repeat: -1,
          ease: "none",
        }
      );
      tl4.delay(16);
      tl4.fromTo(
        image4,
        { bottom: "-15%" },
        {
          duration: 25,
          bottom: "110%",
          repeat: -1,
          ease: "none",
        }
      );
      tl_swiper.delay(1.5);
      tl_swiper.fromTo(
        swiper,
        { opacity: "0", y: 40 },
        {
          y: 0,
          duration: 0.6,
          opacity: "1",
          ease: "power1",
        }
      );
      image1.addEventListener("mouseenter", () => {
        tl.pause();
      });
      image1.addEventListener("mouseleave", () => {
        tl.resume();
      });

      image2.addEventListener("mouseenter", () => {
        tl2.pause();
      });

      image2.addEventListener("mouseleave", () => {
        tl2.resume();
      });

      image3.addEventListener("mouseenter", () => {
        tl3.pause();
      });

      image3.addEventListener("mouseleave", () => {
        tl3.resume();
      });
      image4.addEventListener("mouseenter", () => {
        tl4.pause();
      });

      image4.addEventListener("mouseleave", () => {
        tl4.resume();
      });
    });

    return {
      modules,
      currentSlide,
      currentImage,
      onSwiperInit,
      onSlideChange,
      id_cat,
    };
  },
};
function test() {
  alert("dw");
}
</script>

<style scoped>
* {
  user-select: none;
}
@font-face {
  font-family: "Instrument";
  src: url("../assets/font/InstrumentSerif-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "switzer";
  src: url("../assets/font/switzer.ttf") format("truetype");
}
body {
  overflow: hidden;
}
.bouton {
  width: 200px;
  height: 65px;
  position: absolute;
  bottom: 4%;
  left: 7%;
  border: solid 3px #1a1a1a;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-out;
}
.bouton p {
  font-family: "instrument";
  font-size: 1.8em;
  letter-spacing: 0.3px;
  color: #1a1a1a;
  transition: all 0.4s ease-out;
}
.bouton:hover {
  background-color: #1a1a1a;
}
.bouton:hover p {
  color: #f3f3f3;
}
.image {
  height: 100px;
  aspect-ratio: 16/9;
  filter: blur(2.5px) drop-shadow(5px 5px 5px gray);
  background-color: aqua;
  position: absolute;
  transition: filter 0.4s;
  z-index: 2;
}

.image:hover {
  filter: blur(0px);
}
.autre1 {
  left: 3%;
}
.autre2 {
  left: 44%;
}
.autre3 {
  right: 8%;
}
.autre4 {
  left: 23%;
}
.room_title {
  z-index: 3 !important;
}
.photo {
  display: block;
  font-size: 10em;
  font-family: "switzer";
  letter-spacing: -3px;
  font-weight: 600;
  color: #1a1a1a;
  cursor: default;
  z-index: 2;
}

.design {
  display: block;
  font-size: 8em;
  font-family: "switzer";
  letter-spacing: -3px;
  font-weight: 600;
  background: linear-gradient (135deg, #42d392, #647eff);
  cursor: default;
  text-transform: uppercase;
}

.graphique {
  color: #f3f3f3;
  background-color: #1a1a1a;
}
.illustration {
  display: block;
  font-size: 8em;
  font-family: "instrument";
  letter-spacing: -3px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
}
.art {
  font-family: "switzer";
}
.mode {
  font-size: 8em;
  font-family: "instrument";
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.et {
  font-family: "switzer";
  font-size: 1.5em;
}

.style {
  margin-top: 15%;
}

.architecture {
  display: block;
  font-size: 8em;
  font-family: "instrument";
  letter-spacing: -3px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ligne {
  height: 2px;
  width: 80%;
  background-color: #1a1a1a;
}

.video {
  font-size: 8em;
  font-family: "instrument";
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.cinema {
  font-family: "switzer";
}
.room_title:hover {
  cursor: default;
}
.titre_photo2 {
  font-family: "instrument";
}

.fleche_display {
  display: flex;
  gap: 48px;
  flex-direction: row-reverse;
  bottom: 5%;
  position: absolute;
  justify-content: space-around;
  align-items: flex-end;
  right: 10%;
  z-index: 9999;
}

.fleche {
  width: 50px;
  height: auto;
  fill: #1a1a1a;
  transition: fill 0.3s ease;
  cursor: pointer;
  z-index: 9999;
}

.fleche.gauche {
  transform: scaleX(-1);
}

/* remove native arrows */
.swiper-button-prev::after,
.swiper-button-next::after {
  content: none !important;
}

.swiper {
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: black;
  position: relative;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: auto;
}
</style>
