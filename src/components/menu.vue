<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/playlists">Playlists</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/search2">Descubre</router-link>
          </li>
        </ul>
        <!-- Sección de usuario -->
        <div v-if="user" class="d-flex align-items-center">
          <img :src="user.avatar" alt="Avatar" class="rounded-circle me-2" width="40" height="40" />
          <span class="me-3">{{ user.name }}</span>
          <button class="btn btn-outline-danger btn-sm" @click="logout">Logout</button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

//el siguiente codigo es para que se muestre los datos del usuario en el navBar
const storedUser = localStorage.getItem('user');

//
const user= ref(JSON.parse(storedUser));


const logout = () => {
  // Aquí debes agregar la lógica de logout, como limpiar tokens y redirigir
  console.log('Cerrando sesión...');
  localStorage.removeItem('user');
  user.value = null; // Simulación de logout
  window.location.href = '/'; // Recarga la página y redirige a la raíz
};




</script>

<style scoped>
/* .rounded-circle {
  border: 1px solid #ccc;
} */


 
</style>