<template>
  <div>
    <h2>{{ artista?.name }}</h2>
    <img :src="artista?.picture" alt="Imagen del artista" />
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';
const artista = ref(null);

const props = defineProps({
  artist: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  artista.value = props.artist;
});






</script>

<style scoped>
</style>