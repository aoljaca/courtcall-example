import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import RoomEntry from '../components/meeting/entry/RoomEntry.vue';
import Login from "../components/login/Login.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login/:code",
    name: "Login",
    component: Login,
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/login/",
    name: "Login",
    component: Login,
  },
  {
    path: '/entry',
    name: 'Room Entry',
    component: RoomEntry
  }
]

const router = new VueRouter({
  routes,
});

export default router;
