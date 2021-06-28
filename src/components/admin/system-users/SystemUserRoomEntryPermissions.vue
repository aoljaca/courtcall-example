<template>
  <div>
    <h2 class="font-weight-regular mb-2">
      {{ $t("admin.systemUsers.systemUser.roomEntryPermissions") }}
    </h2>
    <v-divider />

    <!-- Editing View -->
    <template v-if="isEditing">
      <v-radio-group v-model="systemUserEdits.roomPermissions.allRooms">
        <v-radio
          class="py-3"
          :label="
            $t('admin.systemUsers.systemUser.radioButtons.allRooms.label')
          "
          :value="true"
        />
        <v-divider />
        <v-radio
          class="pt-6"
          :value="false"
          :label="
            $t('admin.systemUsers.systemUser.radioButtons.selectRooms.label')
          "
        />
      </v-radio-group>

      <template v-if="!systemUserEdits.roomPermissions.allRooms">
        <!-- Display editable room selections -->
        <v-row
          class="ml-5"
          v-for="roomId in systemUserEdits.roomPermissions.roomIds"
          :key="`room-selection-${roomId}`"
        >
          <v-col cols="3">
            <span class="d-flex justify-space-between align-center">
              {{ getRoomNameById(roomId) }}
              <v-btn icon @click="onRemovedEntryItem(roomId)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </span>
          </v-col>
        </v-row>

        <!-- Display editable orginization selections -->
        <v-row
          class="ml-5"
          v-for="orgId in systemUserEdits.roomPermissions.organizationIds"
          :key="`org-selection-${orgId}`"
        >
          <v-col cols="3">
            <span class="d-flex justify-space-between align-center">
              {{ getOrganizationNameById(orgId) }}
              <v-btn icon @click="onRemovedEntryItem(orgId)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </span>
          </v-col>
        </v-row>

        <v-row class="ml-5">
          <v-col cols="3">
            <v-autocomplete
              item-text="name"
              return-object
              hide-details
              :items="allRoomsAndOrganizations"
              :menu-props="autocompleteProps"
              :placeholder="
                $t(
                  'admin.systemUsers.systemUser.formFields.roomPermissionSelections.placeholder'
                )
              "
              :value="autocompleteInput"
              @change="onSelectedEntryItem"
            />
          </v-col>
        </v-row>
        <br />
      </template>
      <v-divider />
    </template>

    <!-- Readonly View -->
    <template v-else>
      <!-- List "All Rooms" or "None Selected" -->
      <template v-if="shouldShowAlternateSelection">
        <v-row class="pt-3">
          <v-col class="font-weight-light">
            {{
              $t(
                `admin.systemUsers.systemUser.formFields.roomPermissionSelections.${
                  systemUser.roomPermissions.allRooms ? "allRooms" : "none"
                }`
              )
            }}
          </v-col>
        </v-row>
      </template>
      <template v-else-if="systemUser">
        <!-- List Selected Rooms -->
        <template v-for="roomId in systemUser.roomPermissions.roomIds">
          <v-row class="py-3" :key="`room-${roomId}`">
            <v-col class="font-weight-light">
              {{ getRoomNameById(roomId) }}
            </v-col>
          </v-row>
          <v-divider :key="`room-${roomId}-divider`" />
        </template>

        <!-- List Selected Organizations -->
        <template v-for="orgId in systemUser.roomPermissions.organizationIds">
          <v-row class="py-3" :key="`org-${orgId}`">
            <v-col class="font-weight-light">
              {{ getOrganizationNameById(orgId) }}
            </v-col>
          </v-row>
          <v-divider :key="`org-${orgId}-divider`" />
        </template>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SystemUser } from "@/model/admin/system-users/system-user";
import { Organization } from "@/model/admin/organization/organization";
import { Room } from "@/model/admin/room/room";

@Component({})
export default class SystemUserRoomEntryPermissions extends Vue {
  @Prop()
  systemUser!: SystemUser;
  @Prop()
  systemUserEdits!: SystemUser;
  @Prop()
  isEditing!: boolean;

  autocompleteInput = {};
  autocompleteProps = {
    openOnClick: false,
  };

  get shouldShowAlternateSelection(): boolean {
    const roomPermissions = this.systemUser.roomPermissions;
    let result = false;

    if (roomPermissions) {
      result =
        roomPermissions.allRooms ||
        (!roomPermissions.roomIds.length &&
          !roomPermissions.organizationIds.length);
    }

    return result;
  }

  get allOrganizations(): Organization[] {
    return this.$store.getters["OrganizationsModule/getAsList"];
  }

  get allRooms(): any[] {
    const rooms: Room[] = this.$store.getters["RoomModule/getAsList"];
    return rooms.map((room) => {
      return { name: room.roomDetails.name, id: room.uuid, isRoom: true };
    });
  }

  get allRoomsAndOrganizations(): any[] {
    let combinedList: any[] = [];

    return combinedList.concat(
      this.allRooms as any[],
      this.allOrganizations as any[]
    );
  }

  getRoomNameById(roomId: string): string {
    return this.$store.getters["RoomModule/getRoomNameById"](roomId);
  }

  getOrganizationNameById(organizationId: string): string {
    return this.$store.getters["OrganizationsModule/getById"](organizationId)
      ?.name;
  }

  onSelectedEntryItem(selected: any): void {
    const selectedRooms = this.systemUserEdits.roomPermissions.roomIds;
    const selectedOrgs = this.systemUserEdits.roomPermissions.organizationIds;

    if (selected.isRoom) {
      if (!selectedRooms.includes(selected.id)) {
        this.systemUserEdits.roomPermissions.roomIds.push(selected.id);
      }
    } else if (!selectedOrgs.includes(selected.id)) {
      this.systemUserEdits.roomPermissions.organizationIds.push(selected.id);
    }

    this.autocompleteInput = {};
  }

  onRemovedEntryItem(idToRemove: string): void {
    // Removing Room
    if (this.systemUserEdits.roomPermissions.roomIds.includes(idToRemove)) {
      this.systemUserEdits.roomPermissions.roomIds =
        this.systemUserEdits.roomPermissions.roomIds.filter(
          (id) => id !== idToRemove
        );
    } else {
      // Removing Organization
      this.systemUserEdits.roomPermissions.organizationIds =
        this.systemUserEdits.roomPermissions.organizationIds.filter(
          (id) => id !== idToRemove
        );
    }
  }
}
</script>

<style lang="scss" scoped></style>
