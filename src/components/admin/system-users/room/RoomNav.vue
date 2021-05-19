<template>
  <div>
    <v-row>
      <v-col>
        Details
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Settings
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Cases
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Participants
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Activity
      </v-col>
    </v-row>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class RoomDetails extends Vue {}
</script>

<style lang="scss" scoped>
</style>
