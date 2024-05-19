<template>
  <div>
    <h1>Profil de {{ user.name }}</h1>
    <p>{{ user.bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles ici */
</style>

