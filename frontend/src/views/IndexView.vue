<template>
  <div class="container mt-5">
    <h1>Bienvenue sur MrTopo</h1>
    <p>Ceci est la page d'accueil.</p>
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';

export default {
  name: 'IndexView',
  components: {
    SearchForm
  }
};
</script>

<style scoped>
/* Add styles here */
</style>

