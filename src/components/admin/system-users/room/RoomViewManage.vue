<template>
  <div>
    <system-user-header></system-user-header>
    <v-container fluid>
      <v-row>
        <v-col class="px-8 pt-4" cols="2">
          <room-nav class="pa-4"></room-nav>
        </v-col>
        <v-col cols="10">
          <room-details class="mb-4"></room-details>
          <settings class="pad-component border mb-8 pb-8"></settings>
          <cases-table class="pad-component border mb-8"></cases-table>
          <participants-table class="pad-component border mb-8"></participants-table>
        </v-col>
      </v-row>
    </v-container>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemUserHeader from "@/components/admin/system-users/SystemUserHeader.vue";
import RoomDetails from "@/components/admin/system-users/room/RoomDetails.vue";
import RoomNav from "@/components/admin/system-users/room/RoomNav.vue";
import Settings from "@/components/admin/system-users/room/Settings.vue";
import CasesTable from "@/components/admin/system-users/room/CasesTable.vue";
import ParticipantsTable from "@/components/admin/system-users/room/ParticipantsTable.vue";

import "reflect-metadata";
import Participants from "../../dashboard/participants/Participants.vue";
@Component({
  components: {
    SystemUserHeader,
    RoomNav,
    RoomDetails,
    Settings,
    CasesTable,
    ParticipantsTable,
    Participants
  },
})
export default class RoomViewManage extends Vue {}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid grey;
}

.pad-component {
  padding: 1rem;
}
</style>
