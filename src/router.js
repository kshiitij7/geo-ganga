import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import MapPage from './views/MapPage.vue';


const routes = [
  { path: '/', name: 'Home', component: HomePage,   },
  { path: '/about', name: 'About', component: AboutPage,    },
  { path: '/map', name: 'Map', component: MapPage,  },
 
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
