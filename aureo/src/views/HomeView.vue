<script setup></script>
<template>
  <div class="room_title">*Photo<span class="titre_photo2">graphie*</span></div>
  <div class="fleche_display">
  
    <svg class="fleche"width="64" height="30" viewBox="0 0 64 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.6654 0C45.9921 3.98601 48.5775 7.4597 52.0507 9.92319C55.524 12.3867 59.7069 13.7137 64 13.7137V16.2863C59.7069 16.2863 55.524 17.6133 52.0507 20.0768C48.5775 22.5403 45.9921 26.014 44.6654 30L42.1592 29.205C43.6578 24.7023 46.5784 20.7783 50.5018 17.9955C51.402 17.357 52.3449 16.7871 53.3213 16.2863H0V13.7137H53.3213C52.3449 13.2129 51.402 12.643 50.5018 12.0045C46.5784 9.22169 43.6578 5.29771 42.1592 0.79499L44.6654 0Z" fill="black"/>
</svg>

<svg  class="fleche gauche "width="64" height="30" viewBox="0 0 64 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.6654 0C45.9921 3.98601 48.5775 7.4597 52.0507 9.92319C55.524 12.3867 59.7069 13.7137 64 13.7137V16.2863C59.7069 16.2863 55.524 17.6133 52.0507 20.0768C48.5775 22.5403 45.9921 26.014 44.6654 30L42.1592 29.205C43.6578 24.7023 46.5784 20.7783 50.5018 17.9955C51.402 17.357 52.3449 16.7871 53.3213 16.2863H0V13.7137H53.3213C52.3449 13.2129 51.402 12.643 50.5018 12.0045C46.5784 9.22169 43.6578 5.29771 42.1592 0.79499L44.6654 0Z" fill="black"/>
</svg>


</div>
</template>

<style scoped>
@font-face {
  font-family: "Instrument";
  src: url("../assets/font/InstrumentSerif-Regular.ttf")
    format("truetype");
}
@font-face {
  font-family: "switzer";
  src: url("../assets/font/switzer.ttf") format("truetype");
}
.room_title {
  display: block;
  font-size:10em ;
  font-family: "switzer";
  letter-spacing: -3px;
  font-weight: 600;
  color: #E2DD1F;
}
.titre_photo2{
  font-family: "instrument";
}

.fleche_display{
display: flex;
gap: 48px;
flex-direction: row-reverse;
bottom: 5%;
position: absolute;
justify-content: space-around;
align-items: flex-end;
right: 10%;


}
.fleche {
 
  width: 50px;
  height: auto;
  
  fill: black;
  transition: fill 0.3s ease;
}
.fleche.gauche {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.fleche:hover {
  cursor: pointer;
  fill: red;
}
</style>
