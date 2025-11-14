<!-- src/views/RoomView.vue -->
<template>
  <div>
    <h1>Salle: {{ room.name }}</h1>
    <p>ID: {{ roomId }}</p>
  </div>
</template>

<script>


export default {
  data() {
    return {
      
    }
  },

  created() {
    // Accès au paramètre dynamique :id
    this.roomId = this.$route.params.id;

    // Charger les données de la salle
   
  },

  watch: {
    // Réagir aux changements de paramètre
    '$route.params.id'(newId) {
      this.roomId = newId;
      
    }
  }
}
</script>