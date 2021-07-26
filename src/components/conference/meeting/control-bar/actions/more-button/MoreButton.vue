<template>
  <div>
    <v-menu
      content-class="elevation-2 rounded-b-0"
      offset-y
      top
      :nudge-top="showCondensedVersion ? '10' : '8'"
      :nudge-left="showCondensedVersion ? '70' : '90'"
      v-model="menuOpen"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row>
          <v-col class="text-center">
            <v-btn
              icon
              dark
              x-large
              outlined
              depressed
              v-on="on"
              v-bind="attrs"
              :class="{ 'pa-5': true, 'bc-white': menuOpen }"
              :title="$t('conference.meeting.controlBar.more.title')"
            >
              <v-icon :color="buttonProperties.iconColor">{{
                buttonProperties.icon
              }}</v-icon>
            </v-btn>
            <p class="white--text body-2 mt-2 mb-0">
              {{ buttonProperties.text }}
            </p>
          </v-col>
        </v-row>
      </template>
      <v-list>
        <div
          v-for="(item, index) in listItems"
          :key="`more-option-${index}`"
          class="pa-0 ma-0"
        >
          <v-list-item>
            <v-btn color="white" class="d-flex justify-start w-100" depressed>
              <span color="accent">
                <v-icon
                  color="accent"
                  class="mr-4 material-icons material-icons-outlined"
                  >{{ item.icon }}</v-icon
                >
                {{ item.label }}
              </span>
            </v-btn>
          </v-list-item>
          <v-divider v-if="item.hasDivider" />
        </div>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MoreIcon extends Vue {
  menuOpen = false;

  listItemsMobile = [
    {
      icon: "mdi-laptop",
      label: this.$t("conference.meeting.controlBar.more.shareScreen"),
    },
    {
      icon: "mdi-file-outline",
      label: this.$t("conference.meeting.controlBar.more.files"),
    },
    {
      icon: "logout",
      label: this.$t("conference.meeting.controlBar.more.move"),
    },
    {
      icon: "mdi-message-outline",
      label: this.$t("conference.meeting.controlBar.more.chat"),
    },
    {
      icon: "mdi-help-circle-outline",
      label: this.$t("conference.meeting.controlBar.more.support"),
    },
    {
      icon: "back_hand",
      label: this.$t("conference.meeting.controlBar.more.hand"),
    },
  ];

  listItemsDesktop = [
    {
      icon: "mdi-help-circle-outline",
      label: this.$t("conference.meeting.controlBar.more.support"),
      hasDivider: true,
    },
    {
      icon: "mdi-bell-plus-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.notificationPreferences.title"
      ),
    },
    {
      icon: "mdi-bell-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.sendNotification.title"
      ),
    },
    {
      icon: "mdi-account-plus-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.inviteParticipants.title"
      ),
      hasDivider: true,
    },
    {
      icon: "mdi-texture",
      label: this.$t(
        "conference.meeting.controlBar.more.changeBackground.title"
      ),
    },
    {
      icon: "mdi-cog-outline",
      label: this.$t("conference.meeting.controlBar.more.avSetup.title"),
    },
    {
      icon: "mdi-closed-caption-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.transcription.titleAlt"
      ),
      hasDivider: true,
    },
    {
      icon: "mdi-circle-slice-8",
      label: this.$t("conference.meeting.controlBar.more.record.titleAlt"),
    },
    {
      icon: "mdi-cast",
      label: this.$t(
        "conference.meeting.controlBar.more.publicStreaming.titleAlt"
      ),
    },
    {
      icon: "back_hand",
      label: this.$t("conference.meeting.controlBar.more.hand"),
    },
  ];

  get buttonProperties(): any {
    return {
      text: this.$t("conference.meeting.controlBar.more.title"),
      icon: "mdi-dots-horizontal",
      iconColor: this.menuOpen ? "primary" : "white",
    };
  }

  get listItems(): any[] {
    return this.showCondensedVersion
      ? this.listItemsMobile
      : this.listItemsDesktop;
  }

  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
