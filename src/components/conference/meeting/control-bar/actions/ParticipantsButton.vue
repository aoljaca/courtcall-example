<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-btn
          icon
          dark
          x-large
          outlined
          depressed
          class="pa-5"
          @click="toggleParticipantsSidebar()"
          :title="$t('conference.meeting.controlBar.participants')"
        >
          <v-icon color="white">mdi-account-supervisor</v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">
          {{ $t("conference.meeting.controlBar.participants") }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ParticipantsButton extends Vue {
  toggleParticipantsSidebar(): void {
    this.$store.dispatch("SidebarModule/alterSidebarMode", {
      sidebarMode: "participants",
    });
  }
}
</script>
