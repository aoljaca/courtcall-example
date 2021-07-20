<template>
  <v-app-bar class="pt-4" color="secondary" flat>
    <v-row>
      <v-col cols="auto" class="d-flex" align-self="center">
        <v-btn
          v-if="showCondensedVersion"
          depressed
          color="white"
          class="py-4 mr-2"
          @click.stop="drawer = !drawer"
        >
          <v-icon color="accent">mdi-menu</v-icon>
        </v-btn>
        <img src="../../../../../public/img/icons/CourtCallIconDark.png" />
      </v-col>
      <v-col align-self="start">
        <h2 class="c-primary text-h4 font-weight-bold no-wrap">
          {{ mainConference.displayName }}
        </h2>
        <h4 class="c-primary font-weight-regular">
          {{ subConference.displayName }}
        </h4>
      </v-col>
      <v-col v-if="!showCondensedVersion" class="d-flex justify-start">
        <!-- Notification Container-->
      </v-col>
      <v-col cols="auto">
        <div class="d-flex flex-row">
          <div
            :class="
              showCondensedVersion ? 'd-flex flex-column text-left' : 'd-flex'
            "
          >
            <v-btn 
              small
              depressed
              :class="{
                  'align-self-center': true,
              }"
            >
              <span class="mr-4">
                <v-icon small color="success"> mdi-circle </v-icon>
                En Espaniol
              </span>
            </v-btn>
            <v-btn 
              small
              depressed
              class="align-self-center mr-4"
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
  </v-app-bar>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";

@Component({})
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
    return (
      this.$vuetify.breakpoint.xs ||
      this.$vuetify.breakpoint.sm ||
      this.$vuetify.breakpoint.smAndDown
    );
  }
}
</script>
<style lang="scss" scoped>
.white-background {
  background: white;
  border-radius: 0.5rem;
}

.no-wrap {
  white-space: nowrap;
}
</style>
