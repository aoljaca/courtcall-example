import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#9E9E9E",
        secondary: "#616161",
        accent: "#AAAAAA",
      },
    },
    options: { customProperties: true },
  },
});
