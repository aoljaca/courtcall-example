<template>
  <div
    class="conference-body-height d-flex justify-space-around flex-column"
    id="waitingRoom-container"
  >
    <v-row id="top-level-row" class="flex-grow-0" justify="center">
      <v-col id="message-host" class="pb-4" :cols="hasDetails ? '5' : '6'">
        <v-alert color="warning" type="warning" icon="mdi-alert-circle-outline">
          {{ $t("waitingRoom.alert") }}
        </v-alert>
        <v-row>
          <v-col>
            <h1>
              {{ $t("waitingRoom.mainHeading") }}
            </h1>
          </v-col>
        </v-row>
        <v-row dense class="pb-8" id="pressure-cooker">
          <v-col class="d-flex" cols="auto">
            <h4>
              {{
                conference
                  ? conference.displayName
                  : "This is a long room name whoaaaa man"
              }}
            </h4>
          </v-col>
          <v-col cols="auto">
            <div class="mx-4">
              {{ $t("waitingRoom.subHeading") }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              color="black--text"
              depressed
              data-test-id="message-host-button"
            >
              {{ $t("waitingRoom.contactHost") }}
            </v-btn>
            <v-btn
              depressed
              class="ml-4"
              color="white black--text"
              data-test-id="exit-button"
            >
              {{ $t("waitingRoom.exit") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <template v-if="hasDetails">
        <v-col cols="1" />
        <v-col id="waitingRoom-content" align-self="end" cols="3">
          <v-row id="watch">
            <v-col>
              <div class="d-flex">
                <v-icon> mdi-play-circle-outline </v-icon>
                <h4 class="mx-2">
                  {{ $t("waitingRoom.watch") }}
                </h4>
              </div>
              <div id="brief-video">
                {{ $t("waitingRoom.watchMsg1") }}
                <a>
                  {{ $t("waitingRoom.watchLink") }}
                </a>
                {{ $t("waitingRoom.watchMsg2") }}
              </div>
            </v-col>
          </v-row>
          <v-row id="read">
            <v-col>
              <div class="d-flex">
                <v-icon class="mr-2"> mdi-book </v-icon>
                <h4>
                  {{ $t("waitingRoom.read") }}
                </h4>
              </div>
              <div id="click-here">
                <a>
                  {{ $t("waitingRoom.readLink") }}
                </a>
                {{ $t("waitingRoom.readMsg") }}
              </div>
            </v-col>
          </v-row>
        </v-col>
      </template>
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

  get hasDetails(): boolean {
    return true;
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: underline;
}
