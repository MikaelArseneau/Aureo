<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
import router from "./router";
import HomeView from "./views/HomeView.vue";


</script>

<template>
<div id="app">
  <header>
  <AppHeader />
  
</header>



<router-view />

  <!-- <HomeView /> -->
  </div>
</template>

<style scoped></style>
