import { createRouter, createWebHistory } from 'vue-router'
import { storeKey } from 'vuex'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import { RouterView } from 'vue-router'
import  Store  from '@/store'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});




export default router
