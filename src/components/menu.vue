<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">

      <!-- Botón de menú responsive -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links de navegación -->
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">🏠 Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/playlists">🎵 Playlists</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/search2">🔍 Descubre</router-link>
          </li>
        </ul>

        <!-- Usuario (si está logueado) -->
        <div v-if="user" class="user-info d-flex align-items-center">
          <img :src="user.avatar" alt="Avatar" class="rounded-circle avatar" />
          <span class="username">{{ user.name }}</span>
          <button class="btn btn-outline-light btn-sm ms-2" @click="logout">Salir</button>
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
/* 💡 Mejoras visuales y mobile-first */
.navbar {
  padding: 10px 15px;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }
  .user-info {
    flex-direction: column;
    text-align: center;
  }
  .username {
    margin-top: 5px;
  }
}

/* Avatar y nombre del usuario */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
}

.username {
  color: white;
  font-weight: bold;
  margin-left: 10px;
}
 
</style>