<template>
  <v-container fluid>
    <v-row>
      <v-col cols="5">
        <system-user-details :systemUserEdits="systemUser" :isEditing="true" />
      </v-col>
      <v-col class="text-end">
        <span>
          <v-btn
            depressed
            tile
            color="grey lighten-1"
            class="mr-2"
            @click="onCancelCreate"
          >
            {{ $t("admin.systemUsers.systemUser.buttons.cancel.title") }}
          </v-btn>
          <v-btn
            depressed
            tile
            color="secondary"
            @click="onSaveChanges"
            :disabled="!hasUnsavedChanges"
          >
            {{ $t("admin.systemUsers.systemUser.buttons.save.title") }}
          </v-btn>
        </span>
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <v-row>
      <v-col>
        <system-user-room-entry-permissions
          :systemUserEdits="systemUser"
          :isEditing="true"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SystemUser } from "@/model/admin/system-users/system-user";
import SystemUserDetails from "./SystemUserDetails.vue";
import SystemUserRoomEntryPermissions from "./SystemUserRoomEntryPermissions.vue";
import { NEW_SYSTEM_USER_BASE } from "@/store/system-users/system-users-module";
import { cloneDeep } from "lodash";
import { isEqual } from "lodash";

@Component({
  components: {
    SystemUserDetails,
    SystemUserRoomEntryPermissions,
  },
})
export default class CreateSystemUser extends Vue {
  systemUser: SystemUser = cloneDeep(NEW_SYSTEM_USER_BASE);

  get hasUnsavedChanges(): boolean {
    return !isEqual(this.systemUser, NEW_SYSTEM_USER_BASE);
  }

  async onSaveChanges(): Promise<void> {
    await this.$store.dispatch(
      "SystemUsersModule/addSystemUser",
      this.systemUser
    );

    this.onCancelCreate();
  }

  onCancelCreate(): void {
    this.$router.push({
      name: "System Users",
    });
  }
}
</script>

<style lang="scss" scoped></style>
