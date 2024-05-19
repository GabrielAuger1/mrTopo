<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <!-- image d'une voie d'escalade -->
    <img src="https://via.placeholder.com/300" alt="Image d'une voie d'escalade" />
  </div>
</template>

<script>
export default {
  name: 'RouteView',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles ici */
</style>
