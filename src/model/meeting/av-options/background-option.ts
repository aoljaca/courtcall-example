interface BackgroundOption {
  type: "none" | "blur" | "background";
  backgroundUrl?: string;
}

const BACKGROUND_OPTIONS: BackgroundOption[] = [
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
const NO_BACKGROUND_BLUR_OPTION: BackgroundOption = {
  type: "none",
};
const BLUR_OPTION: BackgroundOption = {
  type: "blur",
};
export {
  BackgroundOption,
  BACKGROUND_OPTIONS,
  NO_BACKGROUND_BLUR_OPTION,
  BLUR_OPTION,
};
