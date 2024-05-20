<template>
  <div class="container">
    <h1 class="mt-4">Recherche</h1>
    <form @submit.prevent="search" class="mt-3">
      <div class="mb-3">
        <label for="query" class="form-label">Rechercher des routes:</label>
        <input v-model="query" id="query" type="text" class="form-control" placeholder="Entrez le nom de la route"  />
      </div>
      <button type="submit" class="btn btn-primary">Rechercher</button>
    </form>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    <div v-if="results && results.length" class="mt-4">
      <h2>Résultats de la recherche</h2>
      <div class="row">
        <div v-for="result in results" :key="result._id" class="col-md-4 mb-3">
          <div class="card">
            <router-link :to="{ name: 'Route', params: { id: result._id } }">
              <img :src="'https://picsum.photos/300/200?random=' + result._id" class="card-img-top" alt="Placeholder Image">
            </router-link>
            <div class="card-body">
              <h5 class="card-title">
                <router-link :to="{ name: 'Route', params: { id: result._id } }">{{ result.name }}</router-link>
              </h5>
              <p class="card-text">{{ result.location }}</p>
              <p class="card-text"><small class="text-muted">{{ result.difficulty }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      results: [],
      error: null
    };
  },
  methods: {
    async search() {
      this.error = null;
      this.results = [];

      try {
        const response = await axios.post('http://localhost:3000/api/search', { query: this.query });
        this.results = response.data;
      } catch (err) {
        this.error = 'Erreur lors de la recherche: ' + (err.response ? err.response.data.message : err.message);
      }
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
.card {
  height: 100%;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
