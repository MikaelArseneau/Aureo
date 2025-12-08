<template>
  <header class="header">
    <router-link to="/">
      <div class="app-header">
        <p class="titre title">Aureo</p>
        <p class="digital title">Digital</p>
      </div>
    </router-link>
    <router-link to="/propos">
      <p class="propos title">&nbsp;* À propos *&nbsp;</p>
    </router-link>
  </header>
</template>

<style scoped>
:root {
  --propos-hover-color: #647eff;
}
@font-face {
  font-family: "Instrument";
  src: url("../../assets/font/InstrumentSerif-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "switzer";
  src: url("../../assets/font/switzer.ttf") format("truetype");
}
* {
  margin: 0;
  user-select: none;
  overflow: hidden;
}
.title {
  color: #1a1a1a;
}
.header {
  position: absolute;
  background-color: transparent;
  z-index: 9999999;
  top: 0%;
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  margin: 1em;
}

.app-header {
  /* background-color: none;
  text-align: center;
  position: absolute;
  top: 0%;
  left: 0; */
  font-family: "Instrument", serif;
  text-transform: uppercase;
  color: #1a1a1a;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.titre {
  font-size: clamp(32px, 4.5vw, 40px);
  letter-spacing: 1px;
  margin-bottom: -22px;
  cursor: pointer;
}
.digital {
  font-size: clamp(18px, 2.5vw, 18px);
  letter-spacing: 1px;
  font-family: "switzer";
  cursor: pointer;
  font-weight: 600;
  text-align: left;
}

.propos {
  /* position: absolute;
  right: 0;
  top: 0;
  margin-top: 32px;*/
  padding-right: 32px;
  font-family: "switzer";
  font-size: clamp(18px, 4.5vw, 24px);
  font-style: italic;
  color: #1a1a1a;
  cursor: pointer;
  z-index: 100;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
  opacity: 0;
}
.propos:hover,
.propos:focus,
.propos:focus-visible {
  opacity: 1;
}

/* Avant (hover / focus) */
.propos:hover::before,
.propos:focus::before,
.propos:focus-visible::before {
  transform: scaleX(1);
  transform-origin: left;
}

.propos:hover::after,
.propos:focus::after,
.propos:focus-visible::after {
  width: 100%;
  transition: width 0.5s ease-in-out;
}

.propos::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 50px;
  background-color: var(--propos-hover-color);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
}

.propos::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background-color: var(--propos-hover-color);
  width: 0;
  transition: width 0s;
}

@media (max-width: 500px) {
  .digital {
    margin-top: 6px;
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import router from "../../router";

const color = ["#f7ce36", "#FF6B6B", "#647eff", "#42d392", "#9B59B6"];

onMounted(() => {
  const propos = document.querySelector(".propos");
  const aureo = document.querySelectorAll(".header p");

  const tl = gsap.timeline();
  tl.delay(0.5);
  tl.fromTo(
    aureo,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.5,
    }
  );

  propos.addEventListener("mouseenter", () => {
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.documentElement.style.setProperty(
      "--propos-hover-color",
      randomColor
    );
  });
});
</script>
