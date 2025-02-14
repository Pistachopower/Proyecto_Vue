<template>
  <h1>Info</h1>
  <InfoArtist />
  <InfoAlbum />
  <InfoSong />
</template>
  
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import InfoSong from '@/components/InfoSong.vue';
import InfoAlbum from '@/components/InfoAlbum.vue';
import InfoArtist from '@/components/InfoArtist.vue';

const route = useRoute();
const type= computed(() => route.params.type);
console.log(type.value);
const albumId = computed(() => route.params.id);
console.log(albumId.value);

onMounted(() => {
  // Aquí puedes obtener los datos de la ruta o hacer una llamada a una API para obtener los datos
  artist.value = { name: 'Artista Ejemplo', bio: 'Biografía del artista' };
  album.value = { title: 'Álbum Ejemplo', year: 2021 };
  song.value = { title: 'Canción Ejemplo', duration: '3:45' };
});

</script>
  
  
<style scoped>
</style>
  