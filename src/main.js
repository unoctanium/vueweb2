import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'
import "@/assets/styles/tailwind.css"

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // lazy loading
    //component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App)
app.use(router)
app.mount('#app')
