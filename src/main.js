import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'
import "@/assets/styles/tailwind.css"


// Routing

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Animationtest from "@/views/Animationtest.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/animationtest",
    name: "Animationtesr",
    component: Animationtest,
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


// v-appear directive used for Animations (keeps space for component with opacity 0)

//import { Directive, DirectiveBinding, VNode } from 'vue';

export const appear = {
  beforeMount(element) {
    element.style.visibility = 'hidden';
  },
  updated(element, binding, node) {
    if (!binding.value === !binding.oldValue || null === node.transition) {
      return;
    }

    if (!binding.value) {
      node.transition.leave(element, () => {
        element.style.visibility = 'hidden';
      });
      return;
    }

    node.transition.beforeEnter(element);
    element.style.visibility = '';
    node.transition.enter(element);
  }
};


// App bootstrap



const app = createApp(App)
app.use(router)
app.directive('appear', appear)
app.mount('#app')
