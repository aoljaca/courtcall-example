<template>
  <div>
    <system-user-header message="Judge Frank's Room"></system-user-header>
    <v-container fluid class="mt-6">
      <v-row>
        <v-col class="pl-8 pt-4" cols="2">
          <room-nav parentContext="view" class="py-4 pl-4 pr-2"></room-nav>
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
import RoomDetails from "@/components/admin/room/view/RoomDetails.vue";
import RoomNav from "@/components/admin/room/view/RoomNav.vue";
import Settings from "@/components/admin/room/view/Settings.vue";
import CasesTable from "@/components/admin/room/view/CasesTable.vue";
import ParticipantsTable from "@/components/admin/room/view/ParticipantsTable.vue";

import "reflect-metadata";
@Component({
  components: {
    SystemUserHeader,
    RoomNav,
    RoomDetails,
    Settings,
    CasesTable,
    ParticipantsTable,
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
