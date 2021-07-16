<template>
  <div>
    <v-container fluid class="mt-6">
      <v-row>
        <v-col class="pl-8 pt-4" cols="2">
          <room-nav
            parentContext="view"
            class="py-4 pl-4 pr-2"
            @navClicked="onNavClicked"
          ></room-nav>
        </v-col>
        <v-col cols="10">
          <room-details
            ref="roomDetails"
            id="room-details"
            class="mb-4"
          ></room-details>
          <settings
            ref="roomSettings"
            id="settings"
            class="pa-4 border mb-8 pb-8"
          ></settings>
          <cases-table
            ref="casesTable"
            id="cases-table"
            class="pa-4 border mb-8"
          ></cases-table>
          <participants-table
            ref="participantsTable"
            id="participants-table"
            class="pa-4 border mb-8"
          ></participants-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RoomDetails from "@/components/admin/room/view/RoomDetails.vue";
import RoomNav from "@/components/admin/room/view/RoomNav.vue";
import Settings from "@/components/admin/room/view/Settings.vue";
import CasesTable from "@/components/admin/room/view/CasesTable.vue";
import ParticipantsTable from "@/components/admin/room/view/ParticipantsTable.vue";

@Component({
  components: {
    RoomNav,
    RoomDetails,
    Settings,
    CasesTable,
    ParticipantsTable,
  },
})
export default class RoomViewManage extends Vue {
  onNavClicked(ref: string) {
    // get the refs from this component
    const refs: any = this.$refs;
    // find the ref emmitted from RoomNav and store it as an element
    const element: any = refs[ref].$el;
    // call scrollIntoView() on our stored element
    element.scrollIntoView({ behavior: "smooth" });
  }

  mounted(): void {
    const navigationLocation = this.$route.query.navTo as string | null;
    if (navigationLocation) {
      this.onNavClicked(navigationLocation);
    }
  }
}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid grey;
}
</style>
