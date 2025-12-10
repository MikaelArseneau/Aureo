<template>
  <div class="bouton" @click="$emit('click')">
    <p>Visiter la salle</p>
  </div>
</template>

<script setup></script>

<style scoped>
.bouton {
  width: 300px;
  height: 80px;
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
  font-size: 2.5em;
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
</style>
