import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/login/Login.vue";
import EndMeeting from '../components/meeting/end-meeting/EndMeeting.vue';
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
    path: '/logout',
    name: 'Logout',
    component: EndMeeting
  }
];

const router = new VueRouter({
  routes,
});

export default router;
