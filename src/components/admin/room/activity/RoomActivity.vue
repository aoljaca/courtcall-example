<template>
  <div id="roomActivity">
    <v-container fluid>
      <v-row>
        <v-col
          ><h1>{{ roomName }}</h1></v-col
        >
      </v-row>
      <v-row>
        <v-col
          ><span class="font-weight-bold pr-2">{{
            $t("admin.organizations.organization.title")
          }}</span>
          <span>{{ organizationName }}</span>
        </v-col>
      </v-row>
      <hr />
      <v-row>
        <v-col>
          <h2>{{ $t("admin.roomNav.activity") }}</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Organization } from "@/model/admin/organization/organization";
import { Room } from "@/model/admin/room/room";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RoomActivity extends Vue {
  get selectedRoom(): Room {
    return this.$store.getters["RoomModule/getById"](this.$route.params.roomId);
  }

  get roomName(): string | null {
    return this.selectedRoom.roomDetails.name;
  }

  get organizationName(): string | null {
    return this.selectedRoom.roomDetails.organization;
  }
}
</script>