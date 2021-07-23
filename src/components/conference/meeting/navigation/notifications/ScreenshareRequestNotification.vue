<template>
  <v-alert
    dense
    rounded="lg"
    color="warning"
    transition="v-scroll-y-transition"
    :class="{
      'mb-0 d-flex flex-row': true,
      'max-width-fit-content': !showCondensedVersion,
    }"
  >
    <v-row dense>
      <v-col cols="auto" align-self="center" class="pr-5">
        <v-icon color="primary">mdi-monitor-share</v-icon>
      </v-col>
      <v-col align-self="center">
        <span class="font-weight-bold c-primary">{{
          $t("conference.notifications.screenshareRequest.title", {
            participantRequestingToShare: "Tom",
          })
        }}</span>
        <span class="c-primary">
          {{
            $t("conference.notifications.screenshareRequest.description", {
              currentParticipantSharing: "Adam",
            })
          }}
        </span>
      </v-col>
      <v-col cols="auto" align-self="center">
        <v-btn
          small
          depressed
          color="warning"
          @click="onResolveActiveNotification"
          >{{ $t("conference.notifications.screenshareRequest.allow") }}</v-btn
        >
        <br />
        <v-btn
          small
          depressed
          color="warning"
          @click="onResolveActiveNotification"
          >{{ $t("conference.notifications.screenshareRequest.deny") }}</v-btn
        >
      </v-col>
    </v-row>
  </v-alert>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ScreenshareRequestNotification extends Vue {
  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }

  async onResolveActiveNotification(): Promise<void> {
    this.$emit("resolvedNotification");
  }
}
</script>
<style lang="scss" scoped></style>
