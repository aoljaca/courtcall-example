<template>
  <div id="waiting-room-container">
    <v-row id="notification">
      <v-col cols="4" class="warning-background d-flex">
        <v-icon>
          mdi-alert-circle-outline
        </v-icon>
        <div class="d-inline-block mx-2">
          Cases are running 10-15 minutes behind schedule today. 
          Please be prepared to wait until your case is called.
        </div>
      </v-col>
    </v-row>
    <v-row id="top-level-row">
      <v-col id="message-host">
        <v-row id="please-wait">
          <v-col>
            <h1>
              Please wait here.
            </h1>
          </v-col>
        </v-row>
        <v-row id="pressure-cooker">
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
          <v-col cols="3">
            <v-btn
              color="black--text"
              depressed
              data-test-id="message-host-button"
            >
              Message the host
            </v-btn>
          </v-col>
          <v-col cols="2">
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
      <v-col id="waiting-room-content">
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
</style>
