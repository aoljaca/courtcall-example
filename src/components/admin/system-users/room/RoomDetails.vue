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
        <v-col cols="2">
          <v-row>
            <v-col>
              <span>
                Streaming
              </span>
              <v-icon>
                mdi-wifi
              </v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                Recording
              </span>
              <v-icon>
                mdi-circle
              </v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col>
              <span>
                Status
              </span>
              <span class="ml-8 font-weight-light">
                Available
              </span>
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
        <v-col cols="2">
           <v-row>
            <v-col>
              Phone Number
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Host Access Code
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Participant Access Code
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col>
              555-555-5555
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              5555
            </v-col>
          </v-row>
          <v-row>
            <v-col>
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
