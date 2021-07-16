import {
  adminTheme,
  conferenceTheme,
  ThemeSet,
} from "@/plugins/themes/customThemes";

export enum CustomTheme {
  ADMIN = "Admin Theme",
  CONFERENCE = "Conference Theme",
}
class ThemeService {
  switchTheme(themeType: CustomTheme, vuetifyInstance: any): void {
    let newTheme: ThemeSet = {} as ThemeSet;

    switch (themeType) {
      case CustomTheme.ADMIN:
        newTheme = adminTheme;
        break;
      case CustomTheme.CONFERENCE:
      default:
        newTheme = conferenceTheme;
        break;
    }

    vuetifyInstance.theme.themes.dark = newTheme.dark;
    vuetifyInstance.theme.themes.light = newTheme.light;
  }
}

export default new ThemeService();
