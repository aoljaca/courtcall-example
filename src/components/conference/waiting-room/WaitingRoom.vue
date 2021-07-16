<template>
  <div class="conference-body-height d-flex justify-space-around flex-column">
    <v-row class="flex-grow-0">
      <v-col class="m-l-25 pb-4">
        <v-alert color="warning text--black" type="warning" icon="mdi-alert-circle-outline">
          {{ $t("waitingRoom.alert") }}
        </v-alert>
        <v-row>
          <v-col>
            <h1>
              {{ $t("waitingRoom.mainHeading") }}
            </h1>
          </v-col>
        </v-row>
        <v-row dense class="pb-8">
          <v-col class="d-flex">
            <h4>{{ conference ? conference.displayName : "No name" }}</h4>
            <div class="mx-4">
              {{ $t("waitingRoom.subHeading") }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <contact-host />
          </v-col>
          <v-col>
            <v-btn
              color="white black--text"
              depressed
              data-test-id="exit-button"
            >
              {{ $t("waitingRoom.exit") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="m-r-25" align-self="end">
        <v-row>
          <v-col cols="auto">
            <div class="d-flex">
              <v-icon color="accent"> mdi-play-circle-outline </v-icon>
              <h4 class="mx-2">
                {{ $t("waitingRoom.watch") }}
              </h4>
            </div>
            <div>
              {{ $t("waitingRoom.watchMsg1")}} 
              <a>
                {{ $t("waitingRoom.watchLink") }}
              </a>
            </div>
            {{ $t("waitingRoom.watchMsg2") }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <div class="d-flex">
              <v-icon color="accent">mdi-book</v-icon>
              <h4 class="mx-2">
                {{ $t("waitingRoom.read") }}
              </h4>
            </div>
            <div>
              <a>
                {{ $t("waitingRoom.readLink") }}
              </a>
              {{ $t("waitingRoom.readMsg") }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Component, Vue } from "vue-property-decorator";
import ContactHost from "@/components/conference/waiting-room/ContactHost.vue";
@Component({
  components: {
    ContactHost,
  }, 
})
export default class WaitingRoom extends Vue {
  dialog = false;
  timer = 0;

  get conferenceId(): string {
    return this.$route.params.conferenceId;
  }

  get conference(): SubConference {
    return this.$store.getters["ConferenceModule/getSubConferenceByid"](
      this.conferenceId
    );
  }

  // async mounted(): Promise<void> {
  //   // Temporary timer to push user to conference call after 5 seconds
  //   this.timer = setInterval(async () => {
  //     await this.$store.dispatch(
  //       "ConferenceModule/joinConference",
  //       this.conferenceId
  //     );
  //   }, 5000);
  // }

}
</script>
<style lang="scss" scoped>
a {
  text-decoration: underline;
}
.m-l-25 {
  margin-left: 25%;
}
.m-r-25 {
  margin-right: 25%;
}
</style>
