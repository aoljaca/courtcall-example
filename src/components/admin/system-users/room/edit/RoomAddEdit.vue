<template>
  <div>
    <system-user-header></system-user-header>
    <v-container fluid>
      <v-row>
        <v-col class="px-8 pt-4" cols="1">
          <v-row>
            <v-col>
              Details
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="11">
          <room-details-edit>
          </room-details-edit>
        </v-col>
      </v-row>
    </v-container>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemUserHeader from "@/components/admin/system-users/SystemUserHeader.vue";
import RoomDetailsEdit from "@/components/admin/system-users/room/edit/RoomDetailsEdit.vue";

import "reflect-metadata";
@Component({
  components: {
    SystemUserHeader,
    RoomDetailsEdit,
  },
})
export default class RoomAddEdit extends Vue {}
</script>

<style lang="scss" scoped>
.pad-component {
  padding: 1rem;
}
</style>
