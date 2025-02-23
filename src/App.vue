<template>
  <div id="app">
    <WelcomeModal v-if="mostrarModal" :mostrar="mostrarModal" @cerrar="mostrarModal=false"/>

    <!-- Header -->
    <header class="bg-primary text-white py-3">
      <menu />
    </header>

    <!-- Menu -->
    <Menu/>

    <!-- Main Content -->
    <main class="container my-4">
      <router-view /> 
    </main>


    <!-- Reproducto de música -->
    <MusicPlayer />


  </div>
</template>


<script setup>
  import { ref, onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import Menu from "./components/menu.vue";
  import MusicPlayer from "./components/MusicPlayer.vue";
  import WelcomeModal from "./components/WelcomeModal.vue";

  const mostrarModal= ref(true);

  onMounted(() => {
    //
    const user= localStorage.getItem('user');
    if(user){
      mostrarModal.value= false;
    }
  }

  );
</script>


<style lang="scss">
nav{
  border: 1px solid gray;
}
$hover-bg-color: #8a8a8a;
$hover-text-color: #ffffff;
li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: $hover-bg-color;
      color: $hover-text-color;
      font-weight: bold;
    }

  }


</style>
