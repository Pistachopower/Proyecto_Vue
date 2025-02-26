import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import PlaylistsView from '../views/PlaylistsView.vue';
import SearchView from '../views/SearchView.vue';
import SearchView2 from '../views/SearchView2.vue';
import ArtistCard from '../views/ArtistCard.vue';
import InfoView from '@/views/InfoView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: PlaylistsView,
  },
  {
    path: '/search2',
    name: 'Buscador2',
    component: SearchView2,
  },

  {
    path: '/info-detail',
    name: 'InfoView',
    component: InfoView,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
