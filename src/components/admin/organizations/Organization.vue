<template>
  <v-container fluid>
    <!-- Header -->
    <v-row>
      <v-col cols="auto">
        <h2 class="font-weight-medium">
          {{ organization.name }}
        </h2>
      </v-col>
      <v-spacer />
      <v-col cols="auto">
        <v-btn
          depressed
          tile
          color="secondary"
          :to="{
            name: 'Edit Organization',
            params: { organizationId: organization.id },
          }"
        >
          {{ $t("admin.organizations.organization.buttons.edit.title") }}
        </v-btn>
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <!-- Contact Info -->
    <v-row>
      <v-col cols="auto">
        <h2 class="font-weight-regular">
          {{ $t("admin.organizations.organization.contactInfo") }}
        </h2>
      </v-col>
    </v-row>

    <!-- Managers -->
    <v-row>
      <v-col cols="2">
        <span class="font-weight-medium">
          {{ $t("admin.organizations.organization.formFields.managers.title") }}
        </span>
      </v-col>
      <v-col cols="auto">
        <div
          v-for="managerId in organization.managerIds"
          :key="`manager-${managerId}`"
          class="font-weight-medium"
        >
          {{ getParticipantById(managerId).name }}
          <v-btn
            icon
            :to="{
              name: 'Participant',
              params: {
                roomId: getParticipantById(managerId).roomId,
                participantId: managerId,
              },
            }"
            ><v-icon>mdi-open-in-new</v-icon></v-btn
          >
        </div>
      </v-col>
    </v-row>

    <!-- Location -->
    <v-row>
      <v-col cols="2">
        <span class="font-weight-medium">
          {{ $t("admin.organizations.organization.formFields.location.title") }}
        </span>
      </v-col>
      <v-col cols="auto">
        <span class="font-weight-regular">
          {{ organization.location }}
        </span>
      </v-col>
    </v-row>

    <template v-if="!isEditing">
      <br />
      <v-divider />
      <br />

      <!-- Rooms -->
      <v-row>
        <v-col cols="auto">
          <h2 class="font-weight-regular">
            {{ $t("admin.organizations.organization.rooms") }}
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="auto">
          <div
            v-for="roomId in organization.roomIds"
            :key="roomId"
            class="font-weight-medium"
          >
            {{ getRoomById(roomId).roomDetails.name }}
            <v-btn icon :to="{ name: 'View Room', params: { roomId } }"
              ><v-icon>mdi-open-in-new</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import { Organization } from "@/model/admin/organization/organization";
import { Room } from "@/model/admin/room/room";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrganizationComp extends Vue {
  public organization: Organization = {} as Organization;
  isEditing = false;

  mounted(): void {
    let orgId = this.$route.params.organizationId;
    this.organization = this.$store.getters["OrganizationsModule/getById"](
      orgId
    );
  }

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }

  getRoomById(id: string): Room {
    return this.$store.getters["RoomModule/getById"](id);
  }
}
</script>

<style lang="scss" scoped></style>
