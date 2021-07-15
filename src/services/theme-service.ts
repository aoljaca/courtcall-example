import {
  adminTheme,
  conferenceTheme,
  ThemeSet,
} from "@/plugins/themes/customThemes";
import { injectable } from "inversify-props";

export enum CustomTheme {
  ADMIN = "Admin Theme",
  CONFERENCE = "Conference Theme",
}

export interface ThemeService {
  switchTheme: (themeType: CustomTheme, vuetifyInstance: any) => void;
}

@injectable()
export class ThemeServiceImpl implements ThemeService {
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
