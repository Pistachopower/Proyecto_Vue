<template>
  <div>
    <h2>titulo {{song?.title }}</h2>
    <p>duracion {{song?.duration }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';
const song = ref(null);

const props = defineProps({
  song: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  song.value = props.song;
  console.log(song.value);
});

</script>

<style scoped>

</style>