<template>
  <div class="text-block" ref="zone">
     <!-- texte  -->
    <p ref="texte">
      404 / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404
      / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 /
      aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 /
      aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 /
      aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 / aureo / 404 /
    </p>

    <div id="container_btn" ref="btn">
      <router-link to="/" class="bouton">
        <p class="propos">Retour à l'accueil</p>
      </router-link>
    </div>
  </div>
</template>
 <!-- importation  -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const texte = ref(null);
const zone = ref(null);
const btn = ref(null);

onMounted(() => {
  // Hover couleur aléatoire
  const colors = ["#f7ce36", "#FF6B6B", "#647eff", "#42d392", "#9B59B6"];
  btn.value.addEventListener("mouseenter", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty(
      "--btn-hover-color",
      randomColor
    );
  });

  // Split texte en caractères
  const st = new SplitText(texte.value, { type: "chars", charsClass: "char" });
  st.chars.forEach((c) => (c.dataset.t = c.textContent));

  const hoverRange = 80;

  const move = (e) => {
    st.chars.forEach((char) => {
      const rect = char.getBoundingClientRect();
      const dist = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
      );

      if (dist < hoverRange) {
        gsap.to(char, {
          overwrite: true,
          duration: 0.25,
          scrambleText: { text: char.dataset.t, chars: "-:/", speed: 0.25 },
        });
      }
    });
  };

  zone.value.addEventListener("pointermove", move);

  onBeforeUnmount(() => {
    zone.value.removeEventListener("pointermove", move);
  });
});
</script>

<style scoped>
:root {
  --btn-hover-color: #647eff;
}
/* Styles pour la vue 404*/
.text-block {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 2rem;
  width: 90vw;
  height: 100vh;
  font-family: "Geist Mono", monospace;
  font-size: clamp(20px, 3vw, 40px);
  color: #000;
}

.text-block p {
  line-height: 1.4;
  user-select: none;
  cursor: none;
}
.char {
  display: inline-block;
  will-change: transform;
}

#container_btn {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}
/* Styles pour la vue 404*/
.bouton {
  width: 200px;
  height: 65px;
  border: solid 3px #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-out;
}
/* Styles  du bouton*/
.bouton p {
  font-family: "instrument";
  font-size: clamp(20px, 3vw, 32px);
  letter-spacing: 0.3px;
  color: #1a1a1a;
  transition: all 0.4s ease-out;
}

.bouton:hover {
  background-color: var(--btn-hover-color);
}

.bouton:hover p {
  color: #f3f3f3;
  cursor: pointer;
}
</style>
