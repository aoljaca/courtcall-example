<template>
  <div class="conference-body-height d-flex justify-space-around flex-column" id="waiting-room-container">
    <v-row id="top-level-row" class="flex-grow-0">
      <v-col id="message-host" class="m-l-25 pb-4">
        <v-alert type="warning" icon="mdi-alert-circle-outline">
          Cases are running 10-15 minutes behind schedule today. 
          Please be prepared to wait until your case is called.
        </v-alert>
        <v-row>
          <v-col>
            <h1>
              Please wait here.
            </h1>
          </v-col>
        </v-row>
        <v-row dense class="pb-8" id="pressure-cooker">
          <v-col class="d-flex">
            <h4>
              The pressure cooker
            </h4>
            <div class="mx-4">
              Your host will let you into the room soon
            </div>
          </v-col>
        </v-row>
        <v-row id="message-or-exit">
          <v-col>
            <v-btn
              color="black--text"
              depressed
              data-test-id="message-host-button"
            >
              Message the host
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="white black--text"
              depressed
              data-test-id="exit-button"
            >
              Exit
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col id="waiting-room-content" class="m-r-25" align-self="end">
        <v-row id="watch">
          <v-col>
            <div class="d-flex">
              <v-icon>
                mdi-play-circle-outline
              </v-icon>
              <h4 class="mx-2">
                Watch
              </h4>
            </div>
            <div id="brief-video">
              Check out the 
              <a>
              brief video
              </a>
              on the Los Angeles County Virtual Courthouse rules and procedures. 
            </div>
          </v-col>
        </v-row>
        <v-row id="read">
          <v-col>
            <div class="d-flex">
              <h4>
                Read
              </h4>
              <v-icon class="mx-2">
                mdi-book
              </v-icon>
            </div>
            <div id="click-here">
              <a>
              Click here 
              </a>
              to view this document relating to today’s case before entering the courtroom. 
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
import WaitingRoomNotification from "./WaitingRoomNotification.vue";
import { IWaitingRoomNotification } from "@/model/meeting/waiting-room/waiting-room-notification";
type ContactState = "uncontacted" | "contacting" | "contacted";
@Component({
  components: {
    WaitingRoomNotification,
  },
})
export default class WaitingRoom extends Vue {
  hostMessage = "";
  contactState: ContactState = "uncontacted";
  waitingRoomNotifications: IWaitingRoomNotification[] = [
    {
      iconClass: "mdi-book",
      linkDescription: "Read",
      link: "http://wikipedia.org",
      description: "This is an example of a read link",
      color: "lightblue",
    },
    {
      iconClass: "mdi-youtube",
      linkDescription: "Watch",
      link: "http://youtube.com",
      description: "This is an example of a watch link",
      color: "#fc979e",
    },
    {
      iconClass: "mdi-information",
      description: "This is an example of a general link",
      color: "#ffd359",
    },
  ];

  get validMessage() {
    return this.hostMessage.length <= 300 && this.hostMessage.length > 0;
  }
  contactHost() {
    this.contactState = "contacting";
  }
  sendMessage() {
    this.contactState = "contacted";
  }
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
.m-t-25 {
  margin-top: 25%;
}
.m-b-25 {
  margin-bottom: 25%;
}
</style>
