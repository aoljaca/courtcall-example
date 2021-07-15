import Vue from "vue";
import VueI18n from "vue-i18n";
import logout_en from "./i18n/en-us/logout";
import general_en from "./i18n/en-us/general";
import login_en from "./i18n/en-us/login/login";
import entry_en from "./i18n/en-us/conference/entry/entry";
import waiting_room_en from "./i18n/en-us/conference/waiting-room/waiting-room";
import av_options_en from "./i18n/en-us/conference/setup/setup";
import admin_en from "./i18n/en-us/admin/admin";
import sidebar_en from "./i18n/en-us/conference/meeting/sidebar/sidebar";
import notFound_en from "./i18n/en-us/not-found";
import navigation_en from "./i18n/en-us/navigation";
import conference_en from "./i18n/en-us/conference/conference";
Vue.use(VueI18n);
const messages = {
  "en-us": {
    navigation: navigation_en,
    general: general_en,
    login: login_en,
    entry: entry_en,
    logout: logout_en,
    waitingRoom: waiting_room_en,
    avOptions: av_options_en,
    admin: admin_en,
    conference: conference_en,
    sidebar: sidebar_en,
    notFound: notFound_en,
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
