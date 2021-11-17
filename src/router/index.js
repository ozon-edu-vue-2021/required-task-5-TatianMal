import Vue from "vue";
import VueRouter from "vue-router";
import ProductPage from "../components/ProductPage.vue";
import FavouriteProductsPage from "../components/FavouriteProductsPage.vue";
import Cart from "../components/Cart.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: FavouriteProductsPage,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
