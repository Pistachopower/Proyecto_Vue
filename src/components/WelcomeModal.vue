<template>
  <div v-if="mostrar" class="modal fade show d-block" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-overlay">
      <div class="modal-dialog modal-dialog-centered" @click.stop>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Bienvenido a la aplicación</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="username" class="form-label">Tu nombre:</label>
                <input type="text" id="username" v-model="username" class="form-control" placeholder="Ingresa tu nombre" required />
              </div>
              <div class="mb-3">
                <label for="avatar" class="form-label">Selecciona un avatar:</label>
                <select v-model="avatar" id="avatar" class="form-select" required>
                  <option value="https://i.pravatar.cc/150?img=3">Avatar 1</option>
                  <option value="https://i.pravatar.cc/">Avatar 2</option>
                  <option value="https://i.pravatar.cc/">Avatar 3</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary w-100">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const username = ref('');
const avatar = ref('avatar1');

const emit = defineEmits(['cerrar']);
const props = defineProps({
  mostrar: Boolean
});



const handleSubmit = () => {
  const userData = {
    name: username.value,
    avatar: avatar.value,
  };

  localStorage.setItem('user', JSON.stringify(userData));
  window.location.href = '/'; // Recarga la página y redirige a la raíz
};



</script>

<style scoped>
/* Overlay oscuro */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos del modal */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
}

</style>