<!-- RoomView.vue -->
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <h1>Bienvenue dans la salle !</h1>
    <p>ID de la salle : {{ route.params.id }}</p>
    <p>Ici tu peux mettre tout le contenu de ta room : images, boutons, etc.</p>
  </div>
</template>
