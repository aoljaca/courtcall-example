<template>
  <div>
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
          v-for="(roomId, index) in organization.roomIds"
          :key="roomId"
          class="font-weight-medium"
        >
          {{ `Room ${++index} (id: ${roomId})` }}
          <v-btn icon><v-icon>mdi-open-in-new</v-icon></v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Organization } from "@/model/admin/organization/organization";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrganizationRooms extends Vue {
  public organization: Organization = {} as Organization;

  mounted(): void {
    let orgId = this.$route.params.organizationId;
    this.organization = this.$store.getters["OrganizationsModule/getById"](
      orgId
    );
  }

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }
}
</script>

<style lang="scss" scoped></style>
