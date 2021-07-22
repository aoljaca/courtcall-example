<template>
  <v-card color="secondary" flat>
    <v-row dense>
      <v-col cols="auto" class="d-flex" align-self="center">
        <!-- Temporarily disable until we have a purpose for it. -->
        <!-- <v-btn
          v-if="showCondensedVersion"
          depressed
          color="white"
          class="py-4 mr-2 align-self-center"
          @click.stop="drawer = !drawer"
        >
          <v-icon color="accent">mdi-menu</v-icon>
        </v-btn> -->
        <img src="../../../../../public/img/icons/CourtCallIconDark.png" />
      </v-col>
      <v-col cols="auto" align-self="center">
        <h2 class="c-primary font-weight-bold">
          {{ mainConference.displayName }}
        </h2>
        <h4 class="c-primary font-weight-regular">
          {{ subConference.displayName }}
        </h4>
      </v-col>
      <v-col v-if="!showCondensedVersion">
        <persisting-notification-manager />
        <v-spacer />
      </v-col>
      <v-col
        :cols="!showCondensedVersion ? 'auto' : undefined"
        align-self="center"
      >
        <div class="d-flex flex-row justify-flex-end">
          <div
            :class="
              showCondensedVersion ? 'd-flex flex-column text-left' : 'd-flex'
            "
          >
            <v-btn
              depressed
              :class="{
                'align-self-start': showCondensedVersion,
                'align-self-center': !showCondensedVersion,
              }"
            >
              <span>
                <v-icon small color="success"> mdi-circle </v-icon>
                En Espaniol
              </span>
            </v-btn>
            <v-btn
              depressed
              :class="{
                'align-self-start': showCondensedVersion,
                'align-self-center': !showCondensedVersion,
              }"
            >
              <span>
                <v-icon small color="error"> mdi-circle </v-icon>
                {{ $t("conference.callHeader.recording") }}
              </span>
            </v-btn>
          </div>
          <div v-if="!showCondensedVersion" class="ml-2">
            <v-btn
              depressed
              color="white"
              class="py-5 mr-2"
              data-test-id="grid-view-button"
            >
              <v-icon color="accent"> mdi-view-grid-outline </v-icon>
            </v-btn>
            <v-btn
              depressed
              color="white"
              class="py-5"
              data-test-id="full-screen-button"
            >
              <v-icon color="accent"> mdi-fullscreen </v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <persisting-notification-manager
      v-if="showCondensedVersion"
      class="align-self-center"
    />
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import PersistingNotificationManager from "./notifications/PersistingNotificationManager.vue";

@Component({
  components: {
    PersistingNotificationManager,
  },
})
export default class CallHeader extends Vue {
  drawer = true;

  get mainConference(): SubConference {
    const conference = this.$store.getters[
      "ConferenceModule/getActiveConference"
    ];
    const noConference = {
      displayName: "No Conference",
    } as SubConference;
    return conference ?? noConference;
  }

  get subConference(): SubConference {
    const conference = this.$store.getters[
      "ConferenceModule/getActiveSubConference"
    ];
    const noSubConference = {
      displayName: "No Sub-conference",
    } as SubConference;
    return conference ?? noSubConference;
  }

  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }
}
</script>
<style lang="scss" scoped></style>
