import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';


const routes1 = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 