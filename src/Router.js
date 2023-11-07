import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import DetalleSerie from './components/DetalleSerie.vue'
import PersonajesSerie from "./components/PersonajesSerie";

const myRouters = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/serie/:id",
    component: DetalleSerie,
  },
  {
    path: "/personajes/:idserie",
    component: PersonajesSerie,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: myRouters,
});

export default router;
