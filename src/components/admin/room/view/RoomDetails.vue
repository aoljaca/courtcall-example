<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-icon class="mb-2"> mdi-circle </v-icon>
          <div class="mx-4 d-inline-block details-header font-weight-bold">
            {{roomDetails.name}}
          </div>
          <span class="px-6">
            {{ $t("admin.roomDetails.organization") }}
          </span>
          <span>
            {{ roomDetails.organization }}
          </span>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn :title="$t('admin.roomDetails.editButton')" color="white--text grey darken-4 rounded-0" depressed>
            <router-link class="remove-decoration" :to="settingsEditPath">
              {{ $t("admin.roomDetails.editButton") }}
            </router-link>
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
              <v-icon> mdi-wifi </v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                {{ $t("admin.roomDetails.recording") }}
              </span>
              <v-icon> mdi-circle </v-icon>
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
              <v-icon> mdi-lock-open </v-icon>
              <span>
                {{ $t("admin.roomDetails.lock") }}
              </span>
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
              {{ $t("admin.roomDetails.participantAccessCode") }}
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
import { NULL_ROOM_DETAILS } from "@/model/admin/room/room-details";
import "reflect-metadata";
@Component
export default class RoomDetails extends Vue {
  settingsEditPath = "/admin/rooms/" + this.$route.params.roomId + "/edit";

  get roomDetails() {
    if(!this.$store.state.RoomModule.rooms[this.$route.params.roomId]) {
      return NULL_ROOM_DETAILS;
    }

    return this.$store.state.RoomModule.rooms[this.$route.params.roomId].roomDetails;
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white !important;
}
.details-header {
  font-size: 2rem;
  line-height: 2rem;
}
</style>
