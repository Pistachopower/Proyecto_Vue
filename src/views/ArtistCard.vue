<template>
  <div>
    <h1>Artist Card</h1>
    <p>Details about the artist will be displayed here.</p>
  </div>
</template>

<script>
export default {
  name: 'ArtistCard',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
