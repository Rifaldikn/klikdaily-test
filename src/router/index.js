import Vue from "vue";
import VueRouter from "vue-router";
import OrderForm from "../views/OrderForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: OrderForm,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
