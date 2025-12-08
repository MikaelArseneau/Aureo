<template>
  <div class="scroll">
    <!-- texte a propos -->
    <div class="container_propos">
      <div class="texte" ref="texte">
        <span class="titre">Aureo*</span> est votre
        <span class="highlight sp1">espace personnel</span> dédié aux images qui
        <span class="highlight sp2">vous</span> inspirent. Déposez, classez et
        retrouvez facilement vos illustrations favorites. Pensé pour les
        <span class="highlight sp3">créatifs</span>, Aureo simplifie la
        sauvegarde visuelle et vous aide à
        <span class="highlight sp4">construire</span> une bibliothèque
        d'inspirations unique, accessible
        <span class="highlight sp5">partout</span> et à tout moment.
      </div>
    </div>
    <!-- titre contributeur -->
    <h2 class="contributeurs">Contributeurs</h2>
    <!-- contributeurs -->
    <div class="container_namecard">
      <div class="namecard" id="test">Alexandre Gendron</div>
      <div class="namecard" id="test2">Mikael Arseneau</div>
      <div class="namecard" id="test3">Rafael Angon Dubé</div>
      <!-- image cachées qui affichent au hover -->
      <img
        src="/equipe/alexandre_gendron.JPG"
        alt="alexandre Image"
        class="popupalex pop"
      />
      <img
        src="/equipe/mikael_arseneau.JPG"
        alt="Architecture Image"
        class="popupmik pop"
      />
      <img
        src="/equipe/Rafael_Angon Dubé.JPG"
        alt="Architecture Image"
        class="popupraf pop"
      />
    </div>
    <!-- bouton de retour a la page d'accueil -->
    <div id="container_btn">
      <router-link to="/" class="bouton">
        <p class="propos">&nbsp;Retour à l'accueil&nbsp;</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.scroll {
  min-height: 100vh;
  scroll-behavior: smooth;
  overflow-y: scroll !important;
  overflow-x: hidden;
}
/* couleurs hover aleatoires pour les noms des contributeurs et les mots dans le texte */
:root {
  --alex-hover-color: #647eff;
  --mik-hover-color: #647eff;
  --raf-hover-color: #647eff;
  --txt1-hover-color: #647eff;
  --txt2-hover-color: #647eff;
  --txt3-hover-color: #647eff;
  --txt4-hover-color: #647eff;
  --txt5-hover-color: #647eff;
}

body {
  overflow-x: hidden;
  height: 100vh;
}

.container_propos {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 0.8rem;
}
.propos {
  text-decoration: none;
  text-align: center;
  color: #1a1a1a;
  font-size: 2rem;
}

.titre {
  color: #1a1a1a;
  font-size: 4rem;
  font-weight: 600;
}

.texte {
  color: #1a1a1a;
  font-family: "switzer";
  font-size: 2.5rem;
  padding: 0.8rem;
  margin-bottom: 2.5rem;
  margin-top: 5rem;
}

.highlight {
  font-family: "Instrument-italic";
}

.sp1 {
  color: var(--txt1-hover-color);
}

.sp2 {
  color: var(--txt2-hover-color);
}

.sp3 {
  color: var(--txt3-hover-color);
}

.sp4 {
  color: var(--txt4-hover-color);
}

.sp5 {
  color: var(--txt5-hover-color);
}

.contributeurs {
  color: #1a1a1a;
  font-size: 5rem;
  font-family: "switzer";
  font-weight: 600;
  margin: 0.8rem;
}

.container_namecard {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
}

#test {
  border-top: #1a1a1a 1px solid;
}

#test:hover {
  background-color: var(--alex-hover-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #f3f3f3;
}

#test2:hover {
  background-color: var(--mik-hover-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #f3f3f3;
}

#test3:hover {
  background-color: var(--raf-hover-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #f3f3f3;
}

#test:hover ~ .popupalex {
  opacity: 1;
  display: block;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 75%;
  pointer-events: none;
  width: 15rem;
}

#test2:hover ~ .popupmik {
  opacity: 1;
  display: block;
  position: absolute;
  top: 60%;
  left: 35%;
  pointer-events: none;
  width: 15rem;
  transition: all 0.3s ease-in-out;
}

#test3:hover ~ .popupraf {
  opacity: 1;
  display: block;
  position: absolute;
  top: 73%;
  left: 60%;
  pointer-events: none;
  width: 15rem;
  transition: all 0.3s ease-in-out;
}

.namecard {
  color: #1a1a1a;
  font-size: 3rem;
  font-family: "switzer";
  font-weight: 400;
  border-bottom: #1a1a1a 1px solid;
  width: 100%;
  padding-left: 0.8rem;
  transition: all 0.2s ease-in-out;
}

.pop {
  opacity: 0;
  width: 15rem;
}

.popupraf {
  display: block;
  position: absolute;
  top: 73%;
  left: 60%;
  pointer-events: none;
  width: 15rem;
}

.popupmik {
  display: block;
  position: absolute;
  top: 60%;
  left: 35%;
  pointer-events: none;
  width: 15rem;
}

.popupalex {
  display: block;
  position: absolute;
  top: 50%;
  left: 75%;
  pointer-events: none;
  width: 15rem;
}

#container_btn {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
}

.bouton {
  width: 200px;
  height: 65px;
  position: relative;
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
} /* les styles des images demo dans les pages */

@media screen and (max-width: 600px) {
  body {
    height: 1000vh;
  }

  .contributeurs {
    font-size: 3rem;
  }

  .namecard {
    font-size: 2rem;
  }

  .texte {
    font-size: 1.4rem;
  }

  .popupalex {
    opacity: 0;
    display: block;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 25%;
    pointer-events: none;
    width: 15rem;
  }

  #test:hover ~ .popupalex {
    opacity: 1;
    display: block;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 25%;
    pointer-events: none;
    width: 15rem;
  }

  .popupraf {
    opacity: 0;
    display: block;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 35%;
    pointer-events: none;
    width: 15rem;
  }

  #test3:hover ~ .popupraf {
    opacity: 1;
    display: block;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 35%;
    pointer-events: none;
    width: 15rem;
  }
}
</style>
<script setup>
import router from "../router";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ref, onMounted } from "vue";

gsap.registerPlugin(SplitText);

const texte = ref(null);

onMounted(() => {
  const alexandre = document.getElementById("test");

  const mikael = document.getElementById("test2");

  const rafael = document.getElementById("test3");

  const split = new SplitText(texte.value, { type: "words" });
  gsap.from(split.words, {
    y: 50,
    opacity: 0,
    stagger: 0.02,
    duration: 0.6,
    ease: "easeInOut",
  });

  let tl = gsap.timeline();
  /* aniamation sur nos noms */
  tl.fromTo(
    ".contributeurs",
    { y: -65, opacity: 0 },
    { delay: 1, duration: 1, y: 0, ease: "easeInOut", opacity: 1 }
  );

  const color = ["#f7ce36", "#FF6B6B", "#647eff", "#42d392", "#9B59B6"];

  const randomColor1 = color[Math.floor(Math.random() * color.length)];
  document.documentElement.style.setProperty(
    "--txt1-hover-color",
    randomColor1
  );

  const randomColor2 = color[Math.floor(Math.random() * color.length)];
  document.documentElement.style.setProperty(
    "--txt2-hover-color",
    randomColor2
  );

  const randomColor3 = color[Math.floor(Math.random() * color.length)];
  document.documentElement.style.setProperty(
    "--txt3-hover-color",
    randomColor3
  );

  const randomColor4 = color[Math.floor(Math.random() * color.length)];
  document.documentElement.style.setProperty(
    "--txt4-hover-color",
    randomColor4
  );

  const randomColor5 = color[Math.floor(Math.random() * color.length)];
  document.documentElement.style.setProperty(
    "--txt5-hover-color",
    randomColor5
  );

  alexandre.addEventListener("mouseenter", () => {
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.documentElement.style.setProperty(
      "--alex-hover-color",
      randomColor
    );
  });

  mikael.addEventListener("mouseenter", () => {
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.documentElement.style.setProperty(
      "--mik-hover-color",
      randomColor
    );
  });

  rafael.addEventListener("mouseenter", () => {
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.documentElement.style.setProperty(
      "--raf-hover-color",
      randomColor
    );
  });

  // showImage()
});
</script>
