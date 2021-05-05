import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/login/Login.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:code",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
