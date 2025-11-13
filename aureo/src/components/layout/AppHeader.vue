<script setup></script>
<template>
  <nav class="app-header">
    <p class="titre">Aureo</p>
    <p class="digital">Digital</p>
  </nav>
</template>

<style scoped>
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
}
.app-header {
  background-color: none;
  text-align: center;
  position: absolute;
  top: 0%;
  width: 100vw;
  left: 0;
  font-family: "Instrument", serif;
  text-transform: uppercase;
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  margin: 16px;
  z-index: 9999999;
}
.titre {
  font-size: 3em;
  letter-spacing: 1px;
  margin-bottom: -22px;
  cursor: pointer;
}
.digital {
  font-size: 1em;
  letter-spacing: 1px;
  font-family: "switzer";
  cursor: pointer;
}
</style>
