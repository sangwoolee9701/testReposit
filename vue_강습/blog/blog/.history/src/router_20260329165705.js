import { createWebHistory, createRouter } from "vue-router";
import Lists from './components/List.vue';


const routes = [
  {
    path: "/list",
    component: Lists,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 