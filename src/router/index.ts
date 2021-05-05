import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/login/Login.vue";
import WaitingRoom from '../components/meeting/waiting-room/WaitingRoom.vue';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login/:code",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: 'waiting-room',
    name: 'Waiting Room',
    component: WaitingRoom
  }
];

const router = new VueRouter({
  routes,
});

export default router;
