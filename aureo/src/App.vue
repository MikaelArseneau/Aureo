<script setup>
import RectangleApp from "./components/common/RectangleApp.vue";
import AppHeader from "./components/layout/AppHeader.vue";
import HomeView from "./views/HomeView.vue";
import HomeFlecheDroit from "./components/specific/HomeFlecheDroit.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppHeader />
  <RectangleApp />
  <HomeView />
  <HomeFlecheDroit />
</template>

<style scoped></style>
