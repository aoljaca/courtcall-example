<template>
  <div>
    <v-menu
      offset-y
      top
      :nudge-top="showCondensedVersion ? '10' : '10'"
      :nudge-left="showCondensedVersion ? '70' : '90'"
      v-model="menuOpen"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row>
          <v-col class="text-center">
            <v-btn
              fab
              dark
              outlined
              depressed
              class="pa-5"
              v-on="on"
              v-bind="attrs"
              :title="$t('conference.meeting.controlBar.more.title')"
            >
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
            <p class="white--text body-2 mt-2 mb-0">
              {{ $t("conference.meeting.controlBar.more.title") }}
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
            <v-btn
              color="white"
              class="d-flex justify-start w-100"
              depressed
              @click="item.onClick"
            >
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
    <get-support
      v-if="isGettingSupport"
      @closedDialog="onClosedSupportDialog"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GetSupport from "./GetSupport.vue";
@Component({
  components: {
    GetSupport,
  },
})
export default class MoreIcon extends Vue {
  menuOpen = false;
  isGettingSupport = false;
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
      label: this.$t("conference.meeting.controlBar.more.files"),
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
      label: this.$t("conference.meeting.controlBar.more.support"),
    },
  ];

  listItemsDesktop = [
    {
      icon: "mdi-help-circle-outline",
      label: this.$t("conference.meeting.controlBar.more.support"),
      hasDivider: true,
      onClick: this.onSupportClicked,
    },
    {
      icon: "mdi-bell-plus-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.notificationPreferences.title"
      ),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-bell-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.sendNotification.title"
      ),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-account-plus-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.inviteParticipants.title"
      ),
      hasDivider: true,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-texture",
      label: this.$t(
        "conference.meeting.controlBar.more.changeBackground.title"
      ),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-cog-outline",
      label: this.$t("conference.meeting.controlBar.more.avSetup.title"),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-closed-caption-outline",
      label: this.$t(
        "conference.meeting.controlBar.more.transcription.titleAlt"
      ),
      hasDivider: true,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-circle-slice-8",
      label: this.$t("conference.meeting.controlBar.more.record.titleAlt"),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "mdi-cast",
      label: this.$t(
        "conference.meeting.controlBar.more.publicStreaming.titleAlt"
      ),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
    {
      icon: "back_hand",
      label: this.$t("conference.meeting.controlBar.more.support"),
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      onClick: () => null,
    },
  ];

  onSupportClicked(): void {
    console.log("Support Clicked");
    this.isGettingSupport = true;
  }

  onClosedSupportDialog(): void {
    console.log("Support Closed");
    this.isGettingSupport = false;
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
