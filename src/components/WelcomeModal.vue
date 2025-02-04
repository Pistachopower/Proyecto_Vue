<template>
  <div v-if="mostrar" class="modal fade show d-block" tabindex="-1" aria-modal="true" role="dialog">
    <div class="modal-overlay" @click="cerrarModal">
      <div class="modal-dialog modal-dialog-centered" @click.stop>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Bienvenido a la aplicación</h5>
            <button type="button" class="btn-close" @click="cerrarModal"></button>
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
                  <option value="avatar1">Avatar 1</option>
                  <option value="avatar2">Avatar 2</option>
                  <option value="avatar3">Avatar 3</option>
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
import { ref } from 'vue';

const username = ref('');
const avatar = ref('avatar1');

const emit = defineEmits(['register', 'cerrar']); // Agregamos evento para cerrar

const props = defineProps({
  mostrar: Boolean
});

console.log('Props recibidas:', props);


const handleSubmit = () => {
  const userData = {
    name: username.value,
    avatar: avatar.value,
  };

  localStorage.setItem('user', JSON.stringify(userData));

  emit('register'); // Emitimos evento cuando el usuario se registre
  cerrarModal(); // Cerramos el modal
};

const cerrarModal = () => {
  emit('cerrar'); // Emitimos evento para que el padre lo cierre
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