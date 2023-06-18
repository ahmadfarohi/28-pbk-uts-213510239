import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: { name: 'home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue')
    },
     {
      path: '/store',
      name: 'store',
      component: () => import('../components/store.vue')
    },
   
    
   
   
  ]
});


export default router
