import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import buildDependencyContainer from "./inversify/container";
import 'reflect-metadata';
Vue.config.productionTip = false;
buildDependencyContainer();
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
Vue.use(VueSweetalert2);
