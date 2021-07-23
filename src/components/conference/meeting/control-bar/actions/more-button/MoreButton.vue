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
      <v-list v-if="showCondensedVersion">
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon
                color="accent"
                class="mr-4 material-icons material-icons-outlined"
                >mdi-laptop</v-icon
              >{{ $t("conference.meeting.controlBar.more.shareScreen") }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-file-outline</v-icon
              >{{ $t("conference.meeting.controlBar.more.files") }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon
                color="accent"
                class="mr-4 material-icons material-icons-outlined"
                >logout</v-icon
              >{{ $t("conference.meeting.controlBar.more.move") }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-message-outline</v-icon
              >{{ $t("conference.meeting.controlBar.more.chat") }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-help-circle-outline</v-icon
              >{{ $t("conference.meeting.controlBar.more.support") }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon
                color="accent"
                class="mr-4 material-icons material-icons-outlined"
                >back_hand</v-icon
              >{{ $t("conference.meeting.controlBar.more.hand") }}</span
            ></v-btn
          >
        </v-list-item>
      </v-list>
      <v-list v-else class="pa-0 ma-0">
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-help-circle-outline</v-icon
              >{{ $t("conference.meeting.controlBar.more.support") }}</span
            ></v-btn
          >
        </v-list-item>
        <v-divider />
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-bell-plus-outline</v-icon
              >{{
                $t(
                  "conference.meeting.controlBar.more.notificationPreferences.title"
                )
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-bell-outline</v-icon
              >{{
                $t("conference.meeting.controlBar.more.sendNotification.title")
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-account-plus-outline</v-icon
              >{{
                $t(
                  "conference.meeting.controlBar.more.inviteParticipants.title"
                )
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-divider />
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-texture</v-icon
              >{{
                $t("conference.meeting.controlBar.more.changeBackground.title")
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-cog-outline</v-icon
              >{{
                $t("conference.meeting.controlBar.more.avSetup.title")
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-closed-caption-outline</v-icon
              >{{
                $t("conference.meeting.controlBar.more.transcription.titleAlt")
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-divider />
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-circle-slice-8</v-icon
              >{{
                $t("conference.meeting.controlBar.more.record.titleAlt")
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span class="c-accent"
              ><v-icon color="accent" class="mr-4">mdi-cast</v-icon
              >{{
                $t(
                  "conference.meeting.controlBar.more.publicStreaming.titleAlt"
                )
              }}</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed>
            <span class="c-accent">
              <v-icon
                color="accent"
                class="mr-4 material-icons material-icons-outlined"
                >back_hand</v-icon
              >
              {{ $t("conference.meeting.controlBar.more.hand") }}
            </span>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class MoreIcon extends Vue {
  menuOpen = false;

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
