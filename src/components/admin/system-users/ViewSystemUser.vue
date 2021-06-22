<template>
  <v-container fluid>
    <!-- Header -->
    <v-row>
      <v-col cols="6">
        <h2 class="font-weight-medium">
          {{ systemUser.name }}
        </h2>
      </v-col>
      <v-col cols="6" class="d-inline-flex justify-space-between">
        <div>
          <h3 class="font-weight-medium">
            {{
              `${$t(
                "admin.systemUsers.systemUser.status"
              )}: ${systemUserStatusLabel}`
            }}
          </h3>
          <span>
            <v-btn
              color="secondary"
              @click="onToggleStatus"
              depressed
              rounded
              text
            >
              <v-icon class="mr-2">
                {{ systemUser.active ? "mdi-pause-circle" : "mdi-play-circle" }}
              </v-icon>
              {{
                $t(
                  `admin.systemUsers.systemUser.buttons.${
                    systemUser.active ? "deactivate" : "activate"
                  }.title`
                )
              }}
            </v-btn>
          </span>
        </div>

        <span v-if="isEditing">
          <v-btn
            depressed
            tile
            color="grey lighten-1"
            class="mr-2"
            @click="onStopEditing"
          >
            {{ $t("admin.systemUsers.systemUser.buttons.cancel.title") }}
          </v-btn>
          <v-btn
            depressed
            tile
            color="secondary"
            @click="onSubmitEdits"
            :disabled="!hasUnsavedEdits"
          >
            {{ $t("admin.systemUsers.systemUser.buttons.save.title") }}
          </v-btn>
        </span>
        <v-btn v-else depressed tile color="secondary" @click="onStartEditing">
          {{ $t("admin.systemUsers.systemUser.buttons.edit.title") }}
        </v-btn>
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <!-- System User Details -->
    <v-row>
      <v-col cols="5">
        <system-user-details
          :systemUser="systemUser"
          :systemUserEdits="systemUserEdits"
          :isEditing="isEditing"
        />
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <!-- Access Details -->
    <v-row>
      <v-col cols="5">
        <system-user-access-details
          :systemUser="systemUser"
          :systemUserEdits="systemUserEdits"
          :isEditing="isEditing"
        />
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
    <v-row>
      <v-col>
        <system-user-room-entry-permissions
          :systemUser="systemUser"
          :systemUserEdits="systemUserEdits"
          :isEditing="isEditing"
        />
      </v-col>
    </v-row>
    <v-row v-if="isEditing">
      <v-col class="text-right">
        <v-btn
          @click="onToggleArchiveSystemUser"
          color="secondary"
          dark
          depressed
          tile
        >
          {{
            $t(
              `admin.systemUsers.systemUser.buttons.${
                systemUser.archived ? "unarchive" : "archive"
              }.title`
            )
          }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { cloneDeep, isEqual } from "lodash";
import { SystemUser } from "@/model/admin/system-users/system-user";
import SystemUserDetails from "./SystemUserDetails.vue";
import SystemUserAccessDetails from "./SystemUserAccessDetails.vue";
import SystemUserRoomEntryPermissions from "./SystemUserRoomEntryPermissions.vue";

@Component({
  components: {
    SystemUserDetails,
    SystemUserAccessDetails,
    SystemUserRoomEntryPermissions,
  },
})
export default class ViewSystemUser extends Vue {
  systemUser: SystemUser = {} as SystemUser;
  systemUserEdits: SystemUser = {} as SystemUser;
  isEditing = false;

  get hasUnsavedEdits(): boolean {
    return !isEqual(this.systemUser, this.systemUserEdits);
  }

  get systemUserStatusLabel(): string {
    return this.systemUser.active
      ? (this.$t("admin.systemUsers.systemUser.active") as string)
      : (this.$t("admin.systemUsers.systemUser.inactive") as string);
  }

  mounted(): void {
    this.loadSystemUser();

    if (this.$route.query.startEditing) {
      this.isEditing = true;
      delete this.$route.query.startEditing;
    }
  }

  loadSystemUser(): void {
    const systemUserId = this.$route.params.systemUserId;
    this.systemUser = this.$store.getters["SystemUsersModule/getById"](
      systemUserId
    );
  }

  onToggleStatus(): void {
    this.systemUserEdits = cloneDeep(this.systemUser);
    this.systemUserEdits.active = !this.systemUserEdits.active;
    this.onSubmitEdits();
  }

  onToggleArchiveSystemUser(): void {
    this.systemUserEdits.archived = !this.systemUserEdits.archived;
    this.onSubmitEdits();
  }

  onStartEditing(): void {
    this.systemUserEdits = cloneDeep(this.systemUser);
    this.isEditing = true;
  }

  onStopEditing(): void {
    this.systemUserEdits = {} as SystemUser;
    this.isEditing = false;
  }

  async onSubmitEdits(): Promise<void> {
    await this.$store.dispatch(
      "SystemUsersModule/updateSystemUser",
      this.systemUserEdits
    );
    await this.loadSystemUser();

    this.isEditing = true;
    this.onStopEditing();
  }
}
</script>

<style lang="scss" scoped></style>
