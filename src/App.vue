<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<style lang="scss">
@import "./styles/utilities.scss";
@import "./styles/variables.scss";
@import "./styles/mixins.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

$font-family: "Source Sans Pro";
$font-size: min(16px, max(8px, 1vw));
$icon-font-size: min(36px, max(12px, 1.5vw));
$btn-height: 2rem;
html {
  font-size: $font-size !important;
}
.v-application {
  [class*="text-"] {
    font-family: $font-family, sans-serif !important;
  }
  font-family: $font-family, sans-serif !important;
  .v-btn:not(.v-btn-round).v-size--default {
    height: $btn-height;
    padding: 0 $font-size;
    min-width: $font-size;
  }
  .v-btn--fab.v-size--default {
    height: $btn-height;
    width: $btn-height;
  }
  .v-chip.v-size--default {
    height: $btn-height;
  }

  // Temporarily removed. This is preventing component control of icon size, which should still be scaled
  // Come back to this when we do theme or responsive work
  // .v-icon {
  //   // Seems to be applying size directly to mdi icon. Will need important tag
  //   font-size: $font-size !important;
  // }

  .v-chip .v-chip__content {
    font-size: $font-size;
  }
  .v-input {
    font-size: $font-size;
  }
  .v-label {
    font-size: $font-size;
  }
}
</style>
