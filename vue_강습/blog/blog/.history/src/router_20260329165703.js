import { createWebHistory, createRouter } from "vue-router";
import Lists from './components/List.vue';


const routes = [
  {
    path: "/list",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 