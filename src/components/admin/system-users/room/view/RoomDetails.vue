<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-icon class="">
            mdi-circle
          </v-icon>
          <h2 class="mx-4 d-inline-block">Judge Frank's Room</h2>
          <span>{{ $t("admin.roomDetails.organization")}} {{ roomDetails.organization}}</span>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn
          style="color: white" 
          color="grey darken-4 rounded-0"
          depressed
          >
           {{ $t("admin.roomDetails.editButton") }} 
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="ml-8">
        <v-col cols="2">
          <v-row>
            <v-col>
              <span>
                {{ $t("admin.roomDetails.streaming") }}
              </span>
              <v-icon>
                mdi-wifi
              </v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                {{ $t("admin.roomDetails.recording" )}}
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
                {{ $t("admin.roomDetails.status") }}
              </span>
              <span class="ml-8 font-weight-light">
                {{ roomDetails.status }}
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-icon>
                mdi-lock-open
              </v-icon>
              {{ $t("admin.roomDetails.lock") }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
           <v-row>
            <v-col>
              {{ $t("admin.roomDetails.phone") }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomDetails.hostAccessCode") }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomDetails.participantAccessCode")}}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col>
              {{ roomDetails.phone }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ roomDetails.hostAccessCode }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ roomDetails.participantAccessCode }}
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
export default class RoomDetails extends Vue {
  get roomDetails() {
    return this.$store.state.adminRoomModule.roomDetails;
  }
}
</script>

<style lang="scss" scoped>
</style>
