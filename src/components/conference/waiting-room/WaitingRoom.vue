<template>
  <div id="waiting-room-container">
    <v-row id="top-level-row">
      <v-col id="message-and-notify">
        <v-row id="notification">
          <v-col>
            <div>
              Court is running 10 minutes late.....
            </div>
          </v-col>
        </v-row>
        <v-row id="please-wait">
          <v-col>
            <h1>
              Please waite here.
            </h1>
          </v-col>
        </v-row>
        <v-row id="pressure-cooker">
          <v-col class="d-flex">
            <h4>
              The pressure cooker
            </h4>
            <div>
              Your host will let you into the room soon
            </div>
          </v-col>
        </v-row>
        <v-row id="message-or-exit">
          <v-col cols="3">
            <v-btn
              data-test-id="message-host-button"
            >
              Message the host
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
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
            <v-icon>
              mdi-play-circle-outline
            </v-icon>
            <h4>
              Watch
            </h4>
            <div id="brief-video">
              Check out the brief video on the Los Angeles County Virtual Courthouse rules and procedures. 
            </div>
          </v-col>
        </v-row>
        <v-row id="read">
          <v-col>
            <h4>
              Read
            </h4>
            <v-icon>
              mdi-book
            </v-icon>
            <div id="click-here">
              Click here to view this document relating to today’s case before entering the courtroom. 
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
</style>
