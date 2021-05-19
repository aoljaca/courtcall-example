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
            On
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
