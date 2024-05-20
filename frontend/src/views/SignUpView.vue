<template>
  <div class="container">
    <h1 class="mt-4">Créer un compte</h1>
    <form @submit.prevent="signUp" class="mt-3">
      <div class="mb-3">
        <label for="username" class="form-label">Nom d'utilisateur:</label>
        <input v-model="user.username" id="username" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Courriel:</label>
        <input v-model="user.email" id="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe:</label>
        <input v-model="user.password" id="password" type="password" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirmer le mot de passe:</label>
        <input v-model="user.confirmPassword" id="confirmPassword" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    async signUp() {
      if (this.user.password !== this.user.confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/api/auth/signup', this.user);
        console.log('Utilisateur inscrit:', response.data);
        this.$router.push('/signin');
      } catch (error) {
        console.error('Erreur d\'inscription:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
