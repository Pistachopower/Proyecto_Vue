<template>
  <div>
    <h2>{{  }}</h2>
    <p>Año: {{  }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  album: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
</style>