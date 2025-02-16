<!--ESTA ES LA BARRA DE BUSQUEDA -->
<template>
  <form class="search-container" @submit.prevent="searchDeezer">
    <div class="search-input">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="🔍 Busca tu canción o artista..." 
      />
      <button type="submit">
        <i class="bi bi-search"></i> <!-- Ícono de Bootstrap -->
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import {useListaSongs} from "@/stores/buscar"; // Importa el store de canciones
import {useRouter, useRoute} from 'vue-router';
import { storeToRefs } from "pinia";

const songsStore = useListaSongs(); // Instancia el store de canciones

const searchQuery = ref(""); // Guarda el valor de la búsqueda

const router = useRouter(); //se inicializa el router

const route = useRoute(); //se inicializa la ruta

// Función para realizar la búsqueda
const searchDeezer = async () => {

  if (searchQuery.value.trim() === "") return; // Evita búsquedas vacías


  const url = `http://localhost:8080/https://api.deezer.com/search?q=${encodeURIComponent(searchQuery.value)}`;

  try {

    const response = await fetch(url); //Envía una solicitud a la API de Deezer

    if (!response.ok) {
      throw new Error("Error al buscar en Deezer");
    }

    const data = await response.json(); //obtenemos el json con los resultados de la busqueda
    
    songsStore.clearSongs(); // Limpiamos las canciones anteriores
    // emit("results", data.data); // Emitimos los resultados al componente padre
    songsStore.setSongs(data.data); // Guardamos las canciones en el store
    //router.push({ name: 'Buscador2' });//redirigimos a la vista de info
    if (route.name !== 'Buscador2') {
      router.push({ name: 'Buscador2' });
    }
    if (route.name !== 'Buscador2') {
      router.push({ name: 'Buscador2' });
    }
  } catch (error) {
    console.error(error.message);
  }
};
// Define la función para emitir eventos
const emit = defineEmits(["results"]);
</script>


<style scoped>
/* Contenedor centrado */
.search-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

/* Caja de búsqueda */
.search-input {
  width: 90%;
  max-width: 500px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  transition: all 0.3s ease-in-out;
}

/* Input de texto */
.search-input input {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 25px 0 0 25px;
  background: #f7f7f7;
  transition: background 0.3s;
}

/* Cambiar color cuando el input está activo */
.search-input input:focus {
  background: #ffffff;
}

/* Botón de búsqueda */
.search-input button {
  border: none;
  background: #007bff;
  color: white;
  padding: 12px 15px;
  font-size: 18px;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

/* Efecto hover */
.search-input button:hover {
  background: #0056b3;
  transform: scale(1.1);
}

/* Ícono de búsqueda animado */
.search-input button i {
  transition: transform 0.2s;
}

.search-input button:hover i {
  transform: rotate(10deg);
}

/* Diseño mobile-first */
@media (max-width: 768px) {
  .search-input {
    width: 100%;
  }
}

</style>