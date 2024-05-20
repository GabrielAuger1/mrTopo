
<template>
  <div class="container">
    <h1 class="mt-4">{{ route.name }}</h1>
    <div class="card mt-3">
      <img :src="'https://picsum.photos/800/400?random=' + route._id" class="card-img-top" alt="Placeholder Image">
      <div class="card-body">
        <p class="card-text"><strong>Location:</strong> {{ route.location }}</p>
        <p class="card-text"><strong>Difficulty:</strong> {{ route.difficulty }}</p>
        <p class="card-text"><strong>Description:</strong> {{ route.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      route: {}
    };
  },
  async created() {
    const routeId = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:3000/api/routes/${routeId}`);
      this.route = response.data;
    } catch (err) {
      console.error('Erreur lors de la récupération de la route:', err);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.mt-4 {
  margin-top: 1.5rem !important;
}
.mt-3 {
  margin-top: 1rem !important;
}
.card-img-top {
  height: 400px;
  object-fit: cover;
}
</style>

