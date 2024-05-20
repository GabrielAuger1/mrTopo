<template>
  <div class="container">
    <h1 class="mt-4">Connexion</h1>
    <form @submit.prevent="signIn" class="mt-3">
      <div class="mb-3">
        <label for="email" class="form-label">Courriel:</label>
        <input v-model="user.email" id="email" type="email" class="form-control" required />
        <span v-if="emailError" class="text-danger">{{ emailError }}</span>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe:</label>
        <input v-model="user.password" id="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      emailError: '',
      error: null
    };
  },
  methods: {
    async signIn() {
      this.emailError = '';

      if (!this.validateEmail(this.user.email)) {
        this.emailError = 'Doit être un courriel valide';
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', this.user);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/profile');
      } catch (err) {
        this.error = 'Erreur de connexion: ' + (err.response ? err.response.data.message : err.message);
      }
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
