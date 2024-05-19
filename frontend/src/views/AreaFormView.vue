<template>
  <div>
    <h1>Formulaire de Lieu</h1>
    <form>
      <!-- Add form elements here -->
      <div>
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name">
      </div>
      <button type="submit">Soumettre</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AreaFormView',
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped>
/* Add styles here */
</style>

