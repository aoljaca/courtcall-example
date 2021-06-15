<template>
  <div>
    <v-container fluid class="mt-6 pa-8">
      <v-row>
        <v-col cols="2">
          <room-nav
            @navClicked="onNavClicked"
            parentContext="edit"
            class="pl-4 pr-2"
          ></room-nav>
        </v-col>
        <v-col id="add-edit-content" cols="10">
          <v-row id="room-details-edit">
            <v-col>
              <room-details-edit ref="roomDetails" class="pr-2">
              </room-details-edit>
            </v-col>
          </v-row>
          <v-row id="settings-edit">
            <v-col>
              <settings-edit class="border py-2 px-2"> </settings-edit>
            </v-col>
          </v-row>
          <v-row id="add-edit-archive">
            <v-col class="d-flex justify-end">
              <v-btn
                :title="$t('admin.roomSettings.archive')"
                color="grey darken-4 rounded-0 white--text"
                depressed
              >
                {{ $t("admin.roomSettings.archive") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemUserHeader from "@/components/admin/system-users/SystemUserHeader.vue";
import RoomDetailsEdit from "@/components/admin/room/edit/RoomDetailsEdit.vue";
import SettingsEdit from "@/components/admin/room/edit/SettingsEdit.vue";
import RoomNav from "@/components/admin/room/view/RoomNav.vue";

import "reflect-metadata";
@Component({
  components: {
    SystemUserHeader,
    RoomDetailsEdit,
    SettingsEdit,
    RoomNav,
  },
})
export default class RoomAddEdit extends Vue {
  onNavClicked(ref: string) {
    // get the refs from this component
    const refs: any = this.$refs;
    // find the ref emmitted from RoomNav and store it as an element
    const element: any = refs[ref].$el;
    // call scrollIntoView() on our stored element
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid grey;
}

.nav-item-dark {
  background: #d5d5d5;
}
</style>
