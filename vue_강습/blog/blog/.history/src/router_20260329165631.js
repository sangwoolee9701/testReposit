import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';


const routes = [
  {
    path: "/lists",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 