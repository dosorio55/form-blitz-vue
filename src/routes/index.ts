import { createMemoryHistory, createRouter } from "vue-router";
import FormView from "../views/FormView.vue";

const routes = [{ path: "/", component: FormView }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
