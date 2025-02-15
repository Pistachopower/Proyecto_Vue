<template>
  <div>
    <h2>{{album?.title  }}</h2>
    <p>Año: {{album?.cover}}</p>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';
const album = ref(null);

const props = defineProps({
  album: {
    type: Object,
    required: true
  }
});


onMounted(() => {
  album.value = props.album;
});
</script>

<style scoped>
</style>