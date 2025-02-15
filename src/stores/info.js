import { defineStore } from 'pinia';
export const useInfoStore = defineStore('info', {
    state: () => ({
        // Información de la aplicación
        infoData: null,}),
    actions: {
        // Actualiza la información de la aplicación
        setInfoData(data) {
            this.infoData = data;
        },
        clearinfoData() {
            this.infoData = null;
        }
    }
});