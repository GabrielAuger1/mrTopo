<template>
  <div>
    <h1>{{ isEdit ? 'Modifier la voie' : 'Créer une voie' }}</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom:</label>
        <input v-model="route.name" id="name" type="text" required />
      </div>
      <div>
        <label for="type">Type:</label>
        <select v-model="route.type" id="type" required>
          <option value="SPORT">Sport</option>
          <option value="TRAD">Trad</option>
          <option value="TOPROPE">Top Rope</option>
        </select>
      </div>
      <div>
        <label for="grade">Grade:</label>
        <input v-model="route.grade.text" id="grade" type="text" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="route.description" id="description" required></textarea>
      </div>
      <div>
        <label for="approach">Approche:</label>
        <textarea v-model="route.approach" id="approach"></textarea>
      </div>
      <button type="submit">{{ isEdit ? 'Mettre à jour' : 'Créer' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      route: {
        name: '',
        type: '',
        grade: { text: '', value: 0 },
        description: '',
        approach: ''
      },
      isEdit: false
    };
  },
  methods: {
    async submitForm() {
      const token = localStorage.getItem('token');
      const config = {
        headers: { 'Authorization': token }
      };

      try {
        if (this.isEdit) {
          await axios.patch(`http://localhost:3000/api/routes/${this.$route.params.id}`, this.route, config);
        } else {
          await axios.post('http://localhost:3000/api/routes', this.route, config);
        }
        this.$router.push('/profile');
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error);
      }
    }
  },
  async created() {
    if (this.$route.params.id) {
      this.isEdit = true;
      const token = localStorage.getItem('token');
      const config = {
        headers: { 'Authorization': token }
      };

      try {
        const response = await axios.get(`http://localhost:3000/api/routes/${this.$route.params.id}`, config);
        this.route = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération de la voie:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
