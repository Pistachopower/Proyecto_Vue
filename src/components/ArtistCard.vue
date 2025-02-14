<template>
  <div class="artist-card-container container">

    <!-- Información del artista -->
    <div class="artist-header d-flex align-items-center gap-4">
      <img :src="artist.picture_medium" alt="Artist image" class="artist-image" />
      <div class="artist-info">
        <h1>{{ artist.name }}</h1>
        <p class="text-secondary">{{ artist.nb_fan }} fans</p>
      </div>
    </div>

    <!-- Canciones Populares -->
    <div class="songs-section mt-5">
      <h2>Canciones Populares</h2>
      <!-- Usamos el componente SongCard para las canciones -->
      <div class="list-group my-4" v-if="topSongs.length > 0">
        <SongCard v-for="song in topSongs" :key="song.id" :song="song" />
      </div>
    </div>

    <!-- Álbumes del artista -->
    <div class="albums-section mt-5">
      <h2>Álbumes</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="album in albums.splice(0,8)" :key="album.id">
          <div class="card">
            <img :src="album.cover_medium" class="card-img-top" :alt="album.title" />
            <div class="card-body">
              <h5 class="card-title">{{ album.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Recibir la información del artista como prop
  const props = defineProps({
    artist: {
      type: Object,
      required: true
    }
  });
  
  // Función que se ejecuta al hacer click en el botón (puedes redirigir a detalles del artista o hacer algo más)
  const handleClick = () => {
    console.log("Ver detalles del artista:", props.artist);
  };
  </script>
  
  <style scoped>
  .artist-card {
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    max-width: 200px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  .artist-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .artist-info h5 {
    font-size: 16px;
    margin: 0;
  }
  
  .artist-info p {
    font-size: 14px;
    color: #bbb;
  }
  
  .btn {
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
  
  .btn:hover {
    color: #ccc;
  }
  </style>
  