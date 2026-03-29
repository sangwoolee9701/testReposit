import { createWebHistory, createRouter } from "vue-router";
import 


const routes = [
  {
    path: "/list",
    component: List.vue,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 