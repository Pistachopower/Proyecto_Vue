<template>
  <InfoArtist :artist="song?.artist" />
  <InfoAlbum :album="song?.album" />
  <InfoSong :song="song" />
</template>
  
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import InfoSong from '@/components/InfoSong.vue';
import InfoAlbum from '@/components/InfoAlbum.vue';
import InfoArtist from '@/components/InfoArtist.vue';
import {useInfoStore} from '@/stores/info';

const songStore = useInfoStore();
const song = computed(() => songStore.infoData);

onMounted(() => {
  songStore.infoData;
  console.log(songStore);
});

</script>
  
  
<style scoped>
</style>
  