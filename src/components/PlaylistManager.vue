<template>
 <div class="playlist-manager">
    <h2 class="title">🎶 Mi Playlist</h2>

    <div v-if="playlist && playlist.length > 0" class="playlist">
      <PlaylistItem 
        v-for="song in playlist" 
        :key="song.id" 
        :song="song" 
        @remove="removeFromPlaylist(song.id)" 
      />
    </div>

    <transition name="fade">
      <p v-if="playlist.length === 0" class="no-songs">
        📭 No hay canciones en la playlist. ¡Agrega tus favoritas!
      </p>
    </transition>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '@/stores/favorites';
import PlaylistItem from './PlaylistItem.vue'; // Importamos el componente PlaylistItem
import { computed } from 'vue';

const favoritesStore = useFavoritesStore();

// Obtenemos la lista de canciones de la playlist usando Pinia
const playlist = computed(() => favoritesStore.playlist);

// Función para eliminar canción de la playlist
const removeFromPlaylist = (song) => {
  favoritesStore.removeSong(song);
};
</script>

<style scoped>
/* 🎨 Estilos elegantes para la playlist */
.playlist-manager {
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.title {
  text-align: center;
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #007bff;
}

/* Lista de canciones */
.playlist {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Mensaje cuando no hay canciones */
.no-songs {
  text-align: center;
  color: #6c757d;
  font-size: 1.2em;
  font-style: italic;
  margin-top: 20px;
}

/* 🌟 Animación para la eliminación de canciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 📱 Diseño responsive */
@media (max-width: 768px) {
  .playlist-manager {
    padding: 15px;
  }
  .title {
    font-size: 1.5em;
  }
}
</style>