import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueClipboard from "vue-clipboard2";
import AudioVisual from "vue-audio-visual";

Vue.config.productionTip = false;
Vue.use(Toast, {});
Vue.use(VueClipboard);
Vue.use(AudioVisual);
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
