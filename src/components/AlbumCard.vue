<template>
    <RouterLink :to="'/album/' + album.id" class="album-link">

    <div class="album-card">
      <!-- Carátula del álbum -->
      <img :src="album?.cover_medium || ''" alt="Portada del álbum" class="album-cover" />
  
      <!-- Información del álbum -->
      <div class="album-info">
        <h5>{{ album?.title || 'Título del álbum' }}</h5>
        <p>{{ album?.artist?.name || 'Artista' }}</p>
      </div>
  
      <!-- Botón (opcional) para agregar a una lista, ver más detalles, etc. -->
      <button class="btn btn-link" @click="handleClick">
        <i class="bi bi-play-circle"></i> Ver más
      </button>
    </div>
  </RouterLink>
    
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Recibir el álbum como prop
  const props = defineProps({
    album: Object,
  });
</script>

<style scoped>
.album-card {
  border-radius: 10px;
  background-color: transparent;
  border: 0;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 15px;
}
</style>
