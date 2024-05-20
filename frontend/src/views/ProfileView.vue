<template>
  <div class="container">
    <h1 class="mt-4">Profil</h1>
    <div v-if="user" class="card mt-3">
      <div class="card-body">
        <p><strong>Nom d'utilisateur:</strong> {{ user.username }}</p>
        <p><strong>Courriel:</strong> {{ user.email }}</p>
      </div>
    </div>
    <div v-else class="alert alert-info mt-3">
      {{ error || 'Chargement des informations utilisateur...' }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
      error: null
    };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      this.user = response.data;
    } catch (err) {
      this.error = 'Erreur lors du chargement des informations utilisateur.';
      console.error('Erreur lors de la récupération du profil:', err);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
.card {
  margin-top: 20px;
}
</style>

