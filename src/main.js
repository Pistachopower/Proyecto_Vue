import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import './assets/my_bootstrap.scss' //Si utilizo SASS la descomento
import 'bootstrap/dist/css/bootstrap.min.css'; //Si utilizo SASS la comento
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
