import { createMemoryHistory, createRouter } from "vue-router";
import ProductPage from "./pages/ProductPage.vue";
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
