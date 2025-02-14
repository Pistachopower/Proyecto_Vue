<template>
    <div>
      <h2>{{  }}</h2>
      <p>Duración: {{  }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    song: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  </style>