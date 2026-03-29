import { createWebHistory, createRouter } from "vue-router";
import List form './component/List.vue';


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