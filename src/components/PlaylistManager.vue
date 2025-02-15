<template>
  <div class="playlist-manager">
    <div v-if="playlist.length > 0" class="playlist">
      <PlaylistItem v-for="song in playlist" :key="song.id" :song="song" @remove="removeFromPlaylist(song.id)" />
    </div>
    <p v-else class="no-songs">No hay canciones en la playlist.</p>
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
/* Agregar estilos para la playlist */
.playlist-manager {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.playlist {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.no-songs {
  text-align: center;
  color: #6c757d;
  font-size: 1.2em;
}
</style>