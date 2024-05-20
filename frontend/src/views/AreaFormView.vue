<template>
  <div>
    <h1>{{ isEdit ? 'Modifier le lieu' : 'Créer un lieu' }}</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom:</label>
        <input v-model="area.name" id="name" type="text" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="area.description" id="description" required></textarea>
      </div>
      <div>
        <label for="gettingThere">Accès:</label>
        <textarea v-model="area.gettingThere" id="gettingThere" required></textarea>
      </div>
      <div>
        <label for="lat">Latitude:</label>
        <input v-model="area.lat" id="lat" type="number" required />
      </div>
      <div>
        <label for="lon">Longitude:</label>
        <input v-model="area.lon" id="lon" type="number" required />
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
      area: {
        name: '',
        description: '',
        gettingThere: '',
        lat: '',
        lon: ''
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
          await axios.patch(`http://localhost:3000/api/areas/${this.$route.params.id}`, this.area, config);
        } else {
          await axios.post('http://localhost:3000/api/areas', this.area, config);
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
        const response = await axios.get(`http://localhost:3000/api/areas/${this.$route.params.id}`, config);
        this.area = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération du lieu:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
