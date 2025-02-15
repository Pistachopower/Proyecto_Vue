<template>
  <div>
    <!-- CARRUSEL  -->
    <SongCarousel />

    <p>
    Para que salgan los resultados debes entrar en
    <a href="https://cors-anywhere.herokuapp.com/corsdemo">https://cors-anywhere.herokuapp.com/corsdemo</a>
  </p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SongCarousel from '../components/SongCarousel.vue'; // Componente de carrusel
  import { useFavoritesStore } from '@/stores/favorites'; // Store para favoritos
  import { useMusicStore } from "@/stores/music";
  import SongCard from '@/components/SongCard.vue';
  
  const songs = ref([]); // Estado para las canciones filtradas según la búsqueda
  const favoritesStore = useFavoritesStore();
  const musicStore = useMusicStore();

  
  
  // Función para manejar los resultados de búsqueda (solo afecta al grid)
  const handleResults = (data) => {
    songs.value = data.slice(0,6); // Filtramos las canciones que se muestran en el grid
  };
  


</script>

<style scoped>

</style>