<template>
  <div>
    <h2>{{song?.title }}</h2>
    <p>{{song?.duration }}</p>
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
  song.value = props;
  console.log(song.value);
});

</script>

<style scoped>

</style>