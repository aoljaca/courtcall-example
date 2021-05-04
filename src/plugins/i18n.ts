import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const messages = {
  "en-us": {
    login: {
      manual: {
        username: "Username",
        password: "Password",
        description: "Login",
      },
    },
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
