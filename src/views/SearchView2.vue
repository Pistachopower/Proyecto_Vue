<template>
  <div>
    <!-- Componente hijo -->
    <SearchBar @results="handleResults" />

    <!-- Tabla de canciones -->
    <div class="table-responsive mt-4" v-if="songs.length > 0">
      <table class="table table-hover table-bordered">
        <thead class="table-primary">
          <tr>
            <th>Portada</th>
            <th>Título</th>
            <th>Favorito</th>
            <th>Preview</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in songs" :key="song.id">
            <td class="text-center">
              <img :src="song.album.cover_small" alt="Portada del álbum" class="album-cover rounded-circle"/>
            </td>
            <td>
              <strong @click="guardarCancionStore(song)" class="song-title">
                {{ song.title }}
              </strong>
            </td>
            <td class="text-center">
              <button class="btn btn-link" @click="toggleFavorite(song)">
                <i :class="isFavorite(song.id) ? 'bi bi-heart-fill text-danger' : 'bi bi-heart text-muted'"></i>
              </button>
            </td>
            <td class="text-center">
              <button class="btn btn-link" @click="setCurrentSong(song)">
                <i class="bi bi-play-circle text-primary"></i>
              </button>
            </td>
            <td>
              <strong @click="guardarCancionStore(song)" class="artist-name">
                {{ song.artist.name }}
              </strong>
            </td>
            <td>
              <strong @click="guardarCancionStore(song)" class="album-title">
                {{ song.album.title }}
              </strong>
            </td>
            <td class="text-center">
              {{ Math.floor(song.duration / 60) }}:{{ song.duration % 60 < 10 ? "0" : "" }}{{ song.duration % 60 }}
            </td>
          </tr>
        </tbody>
      </table>
      <MusicPlayer v-if="currentSong" :song="currentSong" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted,watch } from "vue";
import SearchBar from "../components/SearchBar.vue"; // Importa el componente hijo
import { useFavoritesStore } from '@/stores/favorites';
import MusicPlayer from "@/components/MusicPlayer.vue";
import { useMusicStore } from "@/stores/music"; // Store global de música
import { useInfoStore } from '@/stores/info';
import { useRouter } from 'vue-router';
import { useListaSongs } from "@/stores/buscar"; // Importa el store de canciones

const songs = ref([]); // Estado para almacenar la lista de canciones
const musicStore = useMusicStore(); // Usamos la store para manejar la canción globalmente
const favoritesStore = useFavoritesStore();
const currentSong = ref(null); // Canción actualmente en reproducción
const infoStore = useInfoStore(); // Se inicializa la store de info
const router = useRouter(); // Se inicializa el router
const songsStore = useListaSongs(); // Instancia el store de canciones
const listaSongsStore = computed(() => songsStore.songs);


const setCurrentSong = (song) => {
  musicStore.setCurrentSong(song); // Cambia la canción en el reproductor global
};

// Maneja los resultados emitidos por el componente hijo
const handleResults = (data) => {
  songs.value = data; // Actualiza la lista de canciones
};

// Comprobamos si la canción la tenemos en favoritos
const toggleFavorite = (song) => {
  if (favoritesStore.isFavorite(song.id)) {
    favoritesStore.removeSong(song.id);
  } else {
    favoritesStore.addSong(song);
  }
};

const isFavorite = (id) => favoritesStore.isFavorite(id);

function guardarCancionStore(song) {
  infoStore.setInfoData(song); // Guardamos la canción en la store
  router.push({ name: 'InfoView' }); // Redirigimos a la vista de info
}


onMounted(() => {
  songsStore.songs;
  if (!songsStore.songs){
    return
  }

  if (songsStore.songs.length > 0) {
    songs.value = songsStore.songs;
  }

  console.log(listaSongsStore.value);
});

watch(listaSongsStore, (newSongs) => {
  console.log(newSongs);

  songs.value = newSongs;
});
</script>

<style scoped>
h1 {
  color: #dc3545;
}

.table td {
  vertical-align: middle;
}

.album-cover {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.song-title, .artist-name, .album-title {
  cursor: pointer;
  color: #007bff;
}

.song-title:hover, .artist-name:hover, .album-title:hover {
  text-decoration: underline;
}
</style>
