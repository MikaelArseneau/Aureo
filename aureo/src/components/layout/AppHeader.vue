<template>
  <header class="header">
    <!-- Logo + Titre "Aureo Digital" cliquable menant à la page d'accueil -->
    <router-link to="/">
      <div class="app-header">
        <p class="titre title">Aureo</p>
        <p class="digital title">Digital</p>
      </div>
    </router-link>

    <!-- Lien "À propos" → page /propos -->
    <router-link to="/propos">
      <p class="propos title">&nbsp;* À propos *&nbsp;</p>
    </router-link>
  </header>
</template>

<style scoped>
:root {
  /* Couleur de l'effet hover dynamique (changée via JavaScript) */
  --propos-hover-color: #647eff;
}

/* Import des polices personnalisées */
@font-face {
  font-family: "Instrument";
  src: url("../../assets/font/InstrumentSerif-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "switzer";
  src: url("../../assets/font/switzer.ttf") format("truetype");
}

/* Styles globaux simples */
* {
  margin: 0;
  user-select: none; /* Empêche la sélection du texte */
  overflow: hidden;  /* Peut être dangereux, masque tout dépassement */
}

/* Classe générale pour le style des textes */
.title {
  color: #1a1a1a;
}

/* Header contenant le logo + le bouton À propos */
.header {
  position: absolute;
  background-color: transparent;
  z-index: 9999999; /* Toujours au-dessus */
  top: 0;
  display: flex;
  justify-content: space-between; /* Écarte les éléments */
  width: 100vw;
  margin: 1em;
}

/* Bloc contenant Aureo + Digital */
.app-header {
  font-family: "Instrument", serif;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px; /* espace entre les deux lignes */
}

/* Texte "Aureo" */
.titre {
  font-size: clamp(32px, 4.5vw, 40px);
  margin-bottom: -22px; /* rapproche "Digital" */
  letter-spacing: 1px;
  cursor: pointer;
}

/* Texte "Digital" */
.digital {
  font-size: clamp(18px, 2.5vw, 18px);
  font-family: "switzer";
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
}

/* Bouton "À propos" */
.propos {
  padding-right: 32px;
  font-family: "switzer";
  font-size: clamp(18px, 4.5vw, 24px);
  font-style: italic;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  opacity: 0; /* Apparait via GSAP */
  position: relative; /* Nécessaire pour ::before et ::after */
}

/* Effets hover */
.propos:hover,
.propos:focus,
.propos:focus-visible {
  opacity: 1;
}

/* Animation du fond coloré sur hover (avant l'élément) */
.propos::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 50px;
  background-color: var(--propos-hover-color); /* Couleur dynamique */
  z-index: -1;
  transform: scaleX(0); /* Barre invisible */
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
}

/* Quand on passe la souris → animation d’apparition du fond */
.propos:hover::before,
.propos:focus::before,
.propos:focus-visible::before {
  transform: scaleX(1);
  transform-origin: left;
}

/* Deuxième couche de couleur, s’étend horizontalement */
.propos::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--propos-hover-color);
  z-index: -2;
  width: 0;
  transition: width 0s;
}

/* Extension visuelle pendant le hover */
.propos:hover::after,
.propos:focus::after,
.propos:focus-visible::after {
  width: 100%;
  transition: width 0.5s ease-in-out;
}

/* Ajustement mobile */
@media (max-width: 500px) {
  .digital {
    margin-top: 6px;
  }
}
</style>

<script setup>
/* Import de GSAP et des hooks Vue */
import { gsap } from "gsap";
import { onMounted } from "vue";

/* Tableau de couleurs utilisées pour l’hover dynamique */
const color = ["#f7ce36", "#FF6B6B", "#647eff", "#42d392", "#9B59B6"];

onMounted(() => {
  /* Sélection du bouton "À propos" */
  const propos = document.querySelector(".propos");

  /* Sélection des textes à animer */
  const aureo = document.querySelectorAll(".header p");

  /* Timeline GSAP pour faire apparaître les textes */
  const tl = gsap.timeline();
  tl.delay(0.5); // petit délai avant l'animation
  tl.fromTo(
    aureo,
    { opacity: 0, y: 20 }, // état initial
    {
      opacity: 1,
      y: 0, // état final
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.5, // animation décalée entre Aureo, Digital, À propos
    }
  );

  /* Effet de changement de couleur aléatoire au survol */
  propos.addEventListener("mouseenter", () => {
    const randomColor = color[Math.floor(Math.random() * color.length)];

    /* Mise à jour de la variable CSS utilisée dans les ::before/::after */
    document.documentElement.style.setProperty(
      "--propos-hover-color",
      randomColor
    );
  });
});
</script>
