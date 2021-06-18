<template>
  <v-container fluid>
    <!-- Header -->
    <template>
      <v-row dense>
        <v-col cols="2">
          <span class="font-weight-medium">
            {{ $t("admin.organizations.organization.formFields.name.title") }}
          </span>
        </v-col>
        <v-col cols="2">
          <v-text-field
            dense
            hide-details
            v-model="organizationEdits.name"
            :placeholder="
              $t('admin.organizations.organization.formFields.name.placeholder')
            "
          />
        </v-col>
        <v-col class="text-right">
          <span>
            <v-btn
              depressed
              tile
              color="grey lighten-1"
              class="mr-2"
              :to="{ name: organizationId ? 'Organization' : 'Organizations' }"
            >
              {{ $t("admin.organizations.organization.buttons.cancel.title") }}
            </v-btn>
            <v-btn
              depressed
              tile
              color="secondary"
              @click="onSaveChanges"
              :disabled="!hasUnsavedChanges"
            >
              {{ $t("admin.organizations.organization.buttons.save.title") }}
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </template>

    <!-- Managers -->
    <v-row>
      <v-col cols="2">
        <span class="font-weight-medium">
          {{ $t("admin.organizations.organization.formFields.managers.title") }}
        </span>
      </v-col>
      <v-col cols="2">
        <v-autocomplete
          v-model="organizationEdits.managerIds"
          multiple
          dense
          item-text="name"
          item-value="id"
          chips
          clearable
          :items="systemUsers"
          :placeholder="
            $t(
              'admin.organizations.organization.formFields.managers.placeholder'
            )
          "
        />
      </v-col>
    </v-row>

    <!-- Location -->
    <v-row>
      <v-col cols="2">
        <span class="font-weight-medium">
          {{ $t("admin.organizations.organization.formFields.location.title") }}
        </span>
      </v-col>
      <v-col cols="2">
        <v-text-field
          dense
          hide-details
          v-model="organizationEdits.location"
          :placeholder="
            $t('admin.organizations.organization.formFields.location.title')
          "
        />
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <v-row v-if="organizationId && !organization.archived">
      <v-col class="text-right">
        <v-btn
          @click="onArchiveOrganization"
          color="secondary"
          dark
          depressed
          tile
        >
          {{ $t("admin.organizations.organization.buttons.archive.title") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Organization } from "@/model/admin/organization/organization";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { isEqual } from "lodash";
import { cloneDeep } from "lodash";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateEditOrganization extends Vue {
  organization: Organization = {} as Organization;
  organizationEdits: Organization = {} as Organization;

  get organizationId(): string | undefined {
    return this.$route.params.organizationId;
  }

  get hasUnsavedChanges(): boolean {
    return !isEqual(this.organization, this.organizationEdits);
  }

  mounted(): void {
    if (this.organizationId) {
      this.loadOrganization();
      this.organizationEdits = cloneDeep(this.organization);
    }
  }

  get systemUsers(): Participant[] {
    return this.$store.getters["ParticipantsModule/getSystemUsersAsList"];
  }

  loadOrganization(): void {
    this.organization = this.$store.getters["OrganizationsModule/getById"](
      this.organizationId
    );
  }

  onSaveChanges(): void {
    if (this.organizationId) {
      if (this.hasUnsavedChanges) {
        this.$store.dispatch(
          "OrganizationsModule/onUpdateOrganization",
          this.organizationEdits
        );
        this.$router.push({ name: "Organization" });
      }
    } else {
      this.$store.dispatch(
        "OrganizationsModule/onCreateOrganization",
        this.organizationEdits
      );
      this.$router.push({ name: "Organizations" });
    }
  }

  onArchiveOrganization(): void {
    this.organizationEdits.archived = true;
    this.onSaveChanges();
  }
}
</script>

<style lang="scss" scoped></style>
