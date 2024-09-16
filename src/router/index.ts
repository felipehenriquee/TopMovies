import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/Home.vue';
import TV from '../views/tv/TV.vue';
import Movies from '../views/Movies/Movies.vue';
import Login from '../views/Login/Login.vue';

// Defina as rotas com tipagem explícita
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/tv',
    name: 'TV',
    component: TV,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

// Crie o roteador com o histórico e as rotas configuradas
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
