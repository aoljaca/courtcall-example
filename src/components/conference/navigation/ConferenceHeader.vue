<template>
  <v-system-bar dark color="primary" class="px-15 py-10 white--text">
    <img
      src="../../../../public/img/icons/CourtCallLogoWhite.png"
      height="80"
    />

    <v-spacer />

    <!-- Help Menu -->
    <v-menu offset-y>
      <!-- Button/Activator -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" dark text class="text-none">
          <h2 class="font-weight-regular">Help</h2>
          <v-icon class="ml-1" size="30">mdi-help-circle-outline</v-icon>
        </v-btn>
      </template>

      <!-- List of options -->
      <v-card class="mt-2">
        <v-list>
          <v-list-item
            v-for="(option, index) in helpOptions"
            link
            :href="option.href"
            :target="option.newTab ? `_blank` : undefined"
            :key="`option-${index}`"
          >
            <v-row>
              <v-col cols="auto">
                <v-icon color="accent">{{ option.icon }}</v-icon>
              </v-col>
              <v-col> {{ option.label }} </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-system-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ConferenceHeader extends Vue {
  helpOptions = [
    {
      icon: "mdi-phone",
      label: this.$t("navigation.help.phone.label"),
      href: `tel:${this.$t("navigation.help.phone.number")}`,
    },
    {
      icon: "mdi-message-outline",
      label: this.$t("navigation.help.liveChat.label"),
      href: this.$t("navigation.help.liveChat.url"),
      newTab: true,
    },
    {
      icon: "mdi-laptop",
      label: this.$t("navigation.help.site.label"),
      href: this.$t("navigation.help.site.url"),
      newTab: true,
    },
    {
      icon: "mdi-dots-horizontal",
      label: this.$t("navigation.help.more"),
    },
  ];
}
</script>
