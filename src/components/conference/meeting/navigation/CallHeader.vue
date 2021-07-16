<template>
  <v-app-bar color="secondary" flat>
    <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />
    <img src="../../../../../public/img/icons/CourtCallIconDark.png" />
    <div class="ml-5">
      <h2 class="c-primary font-weight-bold">
        {{ mainConference.displayName }}
      </h2>
      <h4 class="c-primary font-weight-regular">
        {{ subConference.displayName }}
      </h4>
    </div>
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
}
</script>
<style lang="scss" scoped></style>
