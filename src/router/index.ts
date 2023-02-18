import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DecorationView from "@/views/Decoration.vue";
import LoaderView from "@/views/Loader.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/decoration',
      name: 'decoration',
      component: DecorationView
    },
    {
      path: '/loader',
      name: 'loader',
      component: LoaderView
    }
  ]
})

export default router
