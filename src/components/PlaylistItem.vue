<template>
  <div class="playlist-item">
    <!-- Portada del álbum -->
    <img :src="song.album.cover" alt="Portada del álbum" class="album-cover" />

    <!-- Información de la canción -->
    <div class="song-info">
      <h3 class="song-title">{{ song.title }}</h3>
      <p class="artist-name">{{ song.artist.name }}</p>
    </div>

    <!-- Acciones -->
    <div class="actions">
      <button class="btn btn-outline-danger" @click="removeSong">
        <i class="bi bi-x-circle"></i>
      </button>

      <button class="btn btn-outline-primary ms-2" @click="setCurrentSong(song)">
        <i class="bi bi-play-circle"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMusicStore } from "@/stores/music";

const musicStore = useMusicStore();

const setCurrentSong = (song) => {
  musicStore.setCurrentSong(song);
};

const props = defineProps({
  song: Object, // Recibimos la canción como propiedad
});

const emitRemove = defineEmits(['remove']); // Emitimos el evento para eliminar la canción

// Función para eliminar la canción de la playlist
const removeSong = () => {
  emitRemove('remove'); // Emitimos el evento cuando se elimina la canción
};
</script>

<style scoped>
/* 🎵 Estilo general del ítem */
.playlist-item {
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s;
}

/* 🖱️ Animación al pasar el mouse */
.playlist-item:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

/* 🎵 Portada del álbum */
.album-cover {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 15px;
}

/* 🎼 Información de la canción */
.song-info {
  flex: 1;
}

.song-title {
  font-size: 1.1em;
  font-weight: bold;
  margin: 0;
}

.artist-name {
  color: #6c757d;
  margin: 2px 0 0;
  font-size: 0.9em;
}

/* 🎛️ Botones de acción */
.actions {
  display: flex;
  gap: 10px;
}

/* ❤️ Botón de eliminar */
.btn-outline-danger {
  border-radius: 50%;
  padding: 8px;
  font-size: 18px;
  transition: background 0.2s, transform 0.2s;
}

.btn-outline-danger:hover {
  background: #dc3545;
  color: white;
  transform: scale(1.1);
}

/* ▶️ Botón de reproducir */
.btn-outline-primary {
  border-radius: 50%;
  padding: 8px;
  font-size: 18px;
  transition: background 0.2s, transform 0.2s;
}

.btn-outline-primary:hover {
  background: #007bff;
  color: white;
  transform: scale(1.1);
}

/* 📱 Diseño responsive */
@media (max-width: 768px) {
  .playlist-item {
    flex-direction: column;
    text-align: center;
  }

  .album-cover {
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
  }

  .actions {
    margin-top: 10px;
  }
}
</style>