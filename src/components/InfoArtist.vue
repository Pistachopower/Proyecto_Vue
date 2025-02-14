<template>
  <div>
    <h2>{{  }}</h2>
    <p>{{ }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  artist: {
    type: Object,
    required: true
  }
});




</script>

<style scoped>
</style>