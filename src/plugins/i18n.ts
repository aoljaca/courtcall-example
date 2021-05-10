import Vue from "vue";
import VueI18n from "vue-i18n";
import logout_en from "./i18n/en-us/logout";
import general_en from "./i18n/en-us/general";
import login_en from "./i18n/en-us/login";
import entry_en from "./i18n/en-us/entry";
import waiting_room_en from "./i18n/en-us/waiting-room";
Vue.use(VueI18n);
const messages = {
  "en-us": {
    general: general_en,
    login: login_en,
    entry: entry_en,
    logout: logout_en,
    waitingRoom: waiting_room_en,
  },
};
const languages = Object.keys(messages);
const getLang = () => {
  if (navigator.languages) {
    for (const lang in navigator.languages) {
      const langLowerCase = lang.toLocaleLowerCase();
      if (languages.includes(langLowerCase)) {
        return langLowerCase;
      }
    }
  }
  if (
    navigator.language &&
    languages.includes(navigator.language.toLocaleLowerCase())
  ) {
    return navigator.language.toLocaleLowerCase();
  } else {
    return "en-us";
  }
};

const i18n = new VueI18n({
  locale: getLang(),
  messages,
});

export default i18n;
