<template>
  <div>
    <system-user-header message="Judge Frank's Room"></system-user-header>
    <v-container fluid>
      <v-row>
        <v-col id="add-edit-nav" class="px-8 pt-4" cols="1">
          <v-row>
            <v-col>
              Details
            </v-col>
          </v-row>
        </v-col>
        <v-col id="add-edit-content" cols="11">
          <v-row id="room-details-edit">
            <v-col>
              <room-details-edit>
              </room-details-edit>
            </v-col>
          </v-row>
          <v-row id="settings-edit">
            <v-col>
              <settings-edit class="border">
              </settings-edit>
            </v-col>
          </v-row>
          <v-row id="add-edit-archive">
            <v-col class="d-flex justify-end">
              <v-btn  
              style="color: white" 
              color="grey darken-4 rounded-0"
              depressed
              >
              ARCHIVE ROOM
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
import RoomDetailsEdit from "@/components/admin/system-users/room/edit/RoomDetailsEdit.vue";
import SettingsEdit from "@/components/admin/system-users/room/edit/SettingsEdit.vue"

import "reflect-metadata";
@Component({
  components: {
    SystemUserHeader,
    RoomDetailsEdit,
    SettingsEdit,
  },
})
export default class RoomAddEdit extends Vue {}
</script>

<style lang="scss" scoped>
.pad-component {
  padding: 1rem;
}

.border {
  border: 1px solid grey;
}
</style>
