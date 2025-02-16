import { defineStore } from 'pinia';
export const useListaSongs = defineStore('buscar', {
    state: () => ({
        // Información de la aplicación
        songs: null,}),
    actions: {
        // Actualiza la información de la aplicación
        setSongs(data) {
            this.songs = data;
        },
        clearSongs() {
            this.songs = null;
        }
    }
});