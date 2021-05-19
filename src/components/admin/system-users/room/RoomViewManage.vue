<template>
  <div>
    <system-user-header></system-user-header>
    <v-container>
      <v-row>
        <v-col cols="1">
          <room-nav></room-nav>
        </v-col>
        <v-col cols="11">
          <room-details></room-details>
          <settings></settings>
          <cases-table></cases-table>
          <participants-table></participants-table>
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
</style>
