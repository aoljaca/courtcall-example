<template>
  <div>
    <v-row>
      <v-col>
        <h2>
          Settings
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span>Template</span>
        <span>Template Name (Modified)</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            Entrance Behavior
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            App/Web Passcode
          </v-col>
          <v-col>
            YourHonor931
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Video
          </v-col>
          <v-col>
            On
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Audio
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Allow participants to select before entering room
          </v-col>
          <v-col>
            YES
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Waiting Room
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Audio Only Conferences
          </v-col>
          <v-col>
            Ready-to-Meet
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            PSTN Provider
          </v-col>
          <v-col>
            ZIPDX
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Meeting Video and Audio Control
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Allow partcipants to turn their video off/on
          </v-col>
          <v-col>
            YES
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Allow partcipants to toggle mute themselves
          </v-col>
          <v-col>
            YES
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Video Set Up
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            Default Canvas Layout
          </v-col>
          <v-col>
            Grid
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Allow partcipants to change layout
          </v-col>
          <v-col>
            YES
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Video Quality
          </v-col>
          <v-col>
            HIGH
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            Meeting Operations
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Screen Sharing
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Require Request for Screen Sharing
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            File Management
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Hand Raising
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Chat
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Access Functions
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Recording 
          </v-col>
          <v-col>
            Enabled
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Auto-email link to all participants
          </v-col>
          <v-col>
            ON
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Transcription
          </v-col>
          <v-col>
            ENABLED
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Remote Translation
          </v-col>
          <v-col>
            ENABLED
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Streaming
          </v-col>
          <v-col>
            ENABLED
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Support
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Duplicate participant handling
          </v-col>
          <v-col>
            SUPPORT
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class Settings extends Vue {}
</script>

<style lang="scss" scoped>
</style>
