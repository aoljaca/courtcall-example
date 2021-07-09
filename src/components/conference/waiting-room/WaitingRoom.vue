<template>
  <div class="conference-body-height d-flex justify-space-around flex-column" id="waitingRoom-container">
    <v-row id="top-level-row" class="flex-grow-0">
      <v-col id="message-host" class="m-l-25 pb-4">
        <v-alert color="warning" type="warning" icon="mdi-alert-circle-outline">
          {{ $t("waitingRoom.alert")}}
        </v-alert>
        <v-row>
          <v-col>
            <h1>
              {{ $t("waitingRoom.mainHeading")}}
            </h1>
          </v-col>
        </v-row>
        <v-row dense class="pb-8" id="pressure-cooker">
          <v-col class="d-flex">
            <h4>
              The pressure cooker
            </h4>
            <div class="mx-4">
              {{ $t("waitingRoom.subHeading")}}
            </div>
          </v-col>
        </v-row>
        <v-row id="message-or-exit">
          <v-col>
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  color="black--text"
                  depressed
                  data-test-id="message-host-button"
                >
                  {{ $t("waitingRoom.contactHost")}}
                </v-btn>
              </template>

              <v-card class="pa-4">
                <v-card-title class="text-h5 d-flex justify-center">
                  <div>
                    Message the host
                  </div>
                </v-card-title>

                <v-text-field
                  data-test-id="message-host-text"
                >
                </v-text-field>

                <v-card-actions class="d-flex justify-center">
                  <v-btn
                    depressed
                    data-test-id="message-host-submit"
                    color="primary black--text"
                    text
                    @click="dialog = false"
                  >
                    Submit
                  </v-btn>
                  <v-btn
                    depressed
                    data-test-id="message-host-cancel"
                    text
                    @click="dialog = false"
                  >
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      <v-col id="waitingRoom-content" class="m-r-25" align-self="end">
        <v-row id="watch">
          <v-col>
            <div class="d-flex">
              <v-icon>
                mdi-play-circle-outline
              </v-icon>
              <h4 class="mx-2">
                {{ $t("waitingRoom.watch")}}
              </h4>
            </div>
            <div id="brief-video">
              {{ $t("waitingRoom.watchMsg1")}} 
              <a>
              {{ $t("waitingRoom.watchLink")}}
              </a>
            </div>
            {{ $t("waitingRoom.watchMsg2")}}
          </v-col>
        </v-row>
        <v-row id="read">
          <v-col>
            <div class="d-flex">
              <h4>
                {{ $t("waitingRoom.read")}}
              </h4>
              <v-icon class="mx-2">
                mdi-book
              </v-icon>
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
    </v-row>
  </div>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class WaitingRoom extends Vue {
  dialog = false;
}
</script>
<style lang="scss" scoped>
.big-space {
  padding-bottom: 15vh;
}
.contact-text {
  color: gray;
  font-size: 1.5rem;
}
.warning-background {
  background-color: yellow;
}
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
