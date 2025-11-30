/* toutes les importation */
import HomeView from "../views/HomeView.vue";
import RoomView from "../views/RoomView.vue";
import ProposView from "../views/ProposView.vue";
import NotFound from "../views/404View.vue";
import { createRouter, createWebHistory } from "vue-router";

/* toutes les chemins vers les pages du site */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/room/:id",
    name: "room",
    component: RoomView,
  },
  {
    path: "/propos",
    name: "propos",
    component: ProposView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
