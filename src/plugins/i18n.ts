import Vue from "vue";
import VueI18n from "vue-i18n";
import logout_en from './i18n/en-us/logout';
Vue.use(VueI18n);
const messages = {
  "en-us": {
    general: {
      clickHere: 'Click Here'
    },
    login: {
      manual: {
        username: "Username",
        password: "Password",
        description: "Login",
        rememberUsernameLabel: "Remember My Username",
        rememberUsernameWarning: `DO NOT SELECT IF YOU'RE USING A PUBLIC OR SHARED COMPUTER`,
        forgotPassword: 'Forgot Password ?'
      },
      phoneNumber: '1-888-555-1212',
      liveChat: 'Live Chat',
      website: 'CourtCall Website',
      moreHelp: 'More Help'
    },
    logout: logout_en
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
