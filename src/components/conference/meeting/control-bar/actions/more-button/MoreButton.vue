<template>
  <div>
    <v-menu offset-y top nudge-top="10" nudge-left="90" v-model="menuOpen">
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
      <v-list v-if="showCondensedVersion"> </v-list>
      <v-list v-else class="pa-0 ma-0">
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-help-circle-outline</v-icon
              >Get supports</span
            ></v-btn
          >
        </v-list-item>
        <v-divider />
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-bell-plus-outline</v-icon
              >Notification Preferences</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-bell-outline</v-icon>Send
              notification</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-account-plus-outline</v-icon
              >Invite participants</span
            ></v-btn
          >
        </v-list-item>
        <v-divider />
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-texture</v-icon>Change
              background</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-cog-outline</v-icon
              >Audio/Video set up</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4"
                >mdi-closed-caption-outline</v-icon
              >Turn On Transcription</span
            ></v-btn
          >
        </v-list-item>
        <v-divider />
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-circle-slice-8</v-icon
              >Recording</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed
            ><span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-cast</v-icon>Enable
              public streaming</span
            ></v-btn
          >
        </v-list-item>
        <v-list-item class="pa-0 ma-0">
          <v-btn color="white" class="d-flex justify-start w-100" depressed>
            <span class="material-icons material-icons-outlined"
              >back_hand</span
            >
            <span color="accent"
              ><v-icon color="accent" class="mr-4">mdi-hand-right</v-icon>Raise
              Hand</span
            ></v-btn
          >
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
    return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm;
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.white-background {
  background: white;
}
</style>
