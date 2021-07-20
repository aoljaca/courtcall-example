<template>
  <v-app-bar class="pt-4" color="secondary" flat>
    <v-div color="accent" class="white-background pa-0 ma-0">
      <v-app-bar-nav-icon 
        v-if="showCondensedVersion" 
        @click.stop="drawer = !drawer" 
      />
    </v-div>
    <img src="../../../../../public/img/icons/CourtCallIconDark.png" />
    <v-row>
      <v-col>
        <div class="ml-5">
          <h2 class="c-primary text-h4 font-weight-bold no-wrap">
            {{ mainConference.displayName }}
          </h2>
          <h4 class="c-primary font-weight-regular">
            {{ subConference.displayName }}
          </h4>
        </div>
      </v-col>
      <v-col v-if="!showCondensedVersion" class="d-flex justify-start">
        <!-- Notification Container-->
      </v-col>
      <v-col v-if="showCondensedVersion">
         <div class="d-flex">
          <v-icon small color="error">
            mdi-circle
          </v-icon>
          <span class="no-wrap">
            Recording
          </span>
        </div>
        <div class="d-flex">
          <v-icon small color="success">
            mdi-circle
          </v-icon>
          <span class="no-wrap">
            En Espaniol
          </span>
        </div>
      </v-col>
      <v-col v-else class="d-flex justify-end">
        <div class="pa-4">
          <v-icon small color="success" class="mr-2">
            mdi-circle
          </v-icon>
          <span>
            En Espaniol
          </span>
        </div>
        <div class="mr-2 pa-4">
          <v-icon small color="error" class="mr-2">
            mdi-circle
          </v-icon>
          <span>
            Recording
          </span>
        </div>
        <button 
          class="d-flex justify-center align-center mx-2 pa-4 white-background"
          data-test-id="grid-view-button"
        >
          <v-icon color="accent">
            mdi-view-grid-outline
          </v-icon>
        </button>
        <button 
          class="d-flex justify-center align-center mx-2 pa-4 white-background"
          data-test-id="full-screen-button"
        >
          <v-icon color="accent">
            mdi-fullscreen
          </v-icon>
        </button>
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

  get isMobile(): boolean {
    // TODO: Reference mobile breakpoint vuetify service
    return false;
  }

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
    return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm;
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
