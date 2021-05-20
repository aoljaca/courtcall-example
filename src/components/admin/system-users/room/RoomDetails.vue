<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-icon>
            mdi-circle
          </v-icon>
          <span class="mx-4">Judge Frank</span>
          <span>Organization: CourtCall</span>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn
          style="color: white" 
          color="grey darken-4 rounded-0"
          depressed
          >
           EDIT 
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="3">
              Streaming
              <v-icon>
                mdi-wifi
              </v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span>
                Recording
              </span>
              <v-icon>
                mdi-circle
              </v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="2">
              Status
            </v-col>
            <v-col class="font-weight-light" cols="2">
              Available
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-icon>
                mdi-lock-open
              </v-icon>
              Lock Now
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="3">
              Phone Number
            </v-col>
            <v-col cols="2">
              555-555-5555
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              Host Access Code
            </v-col>
            <v-col cols="4">
              5555
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              Participant Access Code
            </v-col>
            <v-col cols="4">
              5555
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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
