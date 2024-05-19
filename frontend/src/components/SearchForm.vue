<template>
  <div>
    <h1>Rechercher routes</h1>
    <form @submit.prevent="searchRoutes">
      <div>
        <label for="name">Nom de la route:</label>
        <input v-model="searchCriteria.name" id="name" type="text" />
      </div>
      <div>
        <label for="type">Type:</label>
        <select v-model="searchCriteria.type" id="type">
          <option value="">Non spécifié</option>
          <option value="SPORT">Sport</option>
          <option value="TRAD">Trad</option>
          <option value="TOPROPE">Top Rope</option>
        </select>
      </div>
      <div>
        <label for="grade">Grade:</label>
        <input v-model="searchCriteria.grade" id="grade" type="text" />
      </div>
      <div>
        <label for="area">Endroit:</label>
        <input v-model="searchCriteria.area" id="area" type="text" />
      </div>
      <button type="submit">Rechercher</button>
    </form>

    <div v-if="routes.length">
      <h2>Search Results</h2>
      <ul>
        <li v-for="route in routes" :key="route._id">
          {{ route.name }} - {{ route.type }} - {{ route.grade.text }} - {{ route.area.name }}
        </li>
      </ul>
    </div>
    <div v-else-if="searched">
      <p>No results found</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchCriteria: {
        name: '',
        type: '',
        grade: '',
        area: ''
      },
      routes: [],
      searched: false
    };
  },
  methods: {
    async searchRoutes() {
      try {
        const response = await axios.get('http://localhost:3000/api/search', {
          params: this.searchCriteria
        });
        this.routes = response.data;
        this.searched = true;
      } catch (error) {
        console.error("There was an error fetching the routes:", error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
