<template>
  <div>
    <h1>Búsqueda de canciones en Deezer</h1>

    <!-- Componente SearchBar para búsqueda -->
    <SearchBar @results="handleResults" />
    <br>
    <!-- MOSTRAR CARRUSEL Y GRID DE CANCIONES DESTACADAS -->
    <SongCarousel />

    
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SearchBar from '../components/SearchBar.vue'; // Componente de búsqueda
  import SongCarousel from '../components/SongCarousel.vue'; // Componente de carrusel
  import FeaturedArtists from '../components/FeaturedArtists.vue';
  import { useFavoritesStore } from '@/stores/favorites'; // Store para favoritos
  import MusicPlayer from "@/components/MusicPlayer.vue";
  import { useMusicStore } from "@/stores/music";
  import SongCard from '@/components/SongCard.vue';
  const songs = ref([]); // Estado para las canciones filtradas según la búsqueda
  const favoritesStore = useFavoritesStore();
  //const currentSong = ref(null); // Canción actualmente en reproducción
  


  const musicStore = useMusicStore();

  
  
  // Función para manejar los resultados de búsqueda (solo afecta al grid)
  const handleResults = (data) => {
    songs.value = data.slice(0,6); // Filtramos las canciones que se muestran en el grid
  };
  


</script>

<style scoped>
h1, h2 {
  color: #007bff;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.card-body {
  text-align: center;
}

.container {
  margin-top: 20px;
}

button {
  background: none;
  border: none;
  color: #007bff;
}

button:hover {
  cursor: pointer;
}

table td {
  vertical-align: middle;
}
</style>