<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>

