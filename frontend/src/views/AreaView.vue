<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <!-- image d'un secteur de la falaise -->
    <img src="https://via.placeholder.com/300" alt="Image d'un secteur de la falaise" />
  </div>
</template>

<script>
export default {
  name: 'AreaView',
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

