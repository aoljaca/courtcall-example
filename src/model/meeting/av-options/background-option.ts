import i18n from '../../../plugins/i18n';

interface BackgroundOption {
  title?: string,
  type: "none" | "blur" | "background";
  backgroundUrl?: string;
}

const NO_BACKGROUND_BLUR_OPTION: BackgroundOption = {
  title: i18n.t("avOptions.videoPreview.none") as string,
  type: "none",
};
const BLUR_OPTION: BackgroundOption = {
  title: i18n.t("avOptions.videoPreview.blur") as string,
  type: "blur",
};
const BACKGROUND_OPTIONS: BackgroundOption[] = [
  NO_BACKGROUND_BLUR_OPTION,
  BLUR_OPTION,
  {
    type: "background",
    backgroundUrl: `assets/backgrounds/beach-chairs-seaside.jpg`,
  },
  {
    type: "background",
    backgroundUrl: `assets/backgrounds/boise.jpg`,
  },
  {
    type: "background",
    backgroundUrl: `assets/backgrounds/city-skyscrapers.jpg`,
  },
  {
    type: "background",
    backgroundUrl: `assets/backgrounds/home-office.jpg`,
  },
  {
    type: "background",
    backgroundUrl: `assets/backgrounds/law-gavel.jpg`,
  },
  {
    type: "background",
    backgroundUrl: `assets/backgrounds/courtroom.jpg`,
  },
];

export {
  BackgroundOption,
  BACKGROUND_OPTIONS,
  NO_BACKGROUND_BLUR_OPTION,
  BLUR_OPTION,
};
