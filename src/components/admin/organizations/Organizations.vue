<template>
  <div id="organizationsList">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h2 class="c-primary font-weight-medium">
            {{ $t("admin.organizations.organizationList.title") }}
          </h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn
            :title="$t('admin.organizations.organizationList.new.title')"
            elevation="0"
            fab
            :to="{ name: 'Create Organization' }"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="HEADERS" :items="organizations">
            <template v-slot:[`item.name`]="{ item }">
              <router-link
                :to="{
                  name: 'Organization',
                  params: { organizationId: item.id },
                }"
                class="font-weight-bold"
                >{{ item.name }}
              </router-link>
            </template>
            <template v-slot:[`item.managerIds`]="{ item }">
              <div
                class="py-1 px-1 d-inline-block"
                v-for="id in item.managerIds"
                :key="id"
              >
                <v-chip>{{ getParticipantNameById(id) }}</v-chip>
              </div>
            </template>
            <template v-slot:[`item.roomIds`]="{ item }">
              {{ item.roomIds.length }}
            </template>
            <template v-slot:[`item.more`]="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-container fluid>
                    <v-row class="px-0 py-0">
                      <v-col class="px-0 py-0 d-flex justify-center">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                          elevation="0"
                          :title="$t('general.more')"
                        >
                          <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn></v-col
                      >
                    </v-row>
                  </v-container>
                </template>
                <v-list>
                  <v-list-item
                    :to="{
                      name: 'Edit Organization',
                      params: { organizationId: item.id },
                    }"
                  >
                    {{ $t("admin.organizations.organizationList.editOrg") }}
                  </v-list-item>
                  <v-list-item @click="onArchiveOrganization(item)">
                    {{ $t("admin.organizations.organizationList.removeOrg") }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Organization } from "@/model/admin/organization/organization";
@Component({})
export default class Organizations extends Vue {
  readonly HEADERS = [
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Location",
      value: "location",
    },
    {
      text: "Managers",
      value: "managerIds",
      sortable: false,
      filterable: false,
      width: "25%",
    },
    {
      text: "Rooms",
      value: "roomIds",
      sortable: false,
      filterable: false,
      align: "center",
    },
    {
      text: "More",
      value: "more",
      sortable: false,
      filterable: false,
      align: "center",
    },
  ];

  get organizations(): Organization[] {
    return this.$store.getters["OrganizationsModule/getActiveAsList"];
  }

  getParticipantNameById(id: string): string {
    return this.$store.getters["ParticipantsModule/getNameById"](id);
  }

  onArchiveOrganization(organization: Organization): void {
    organization.archived = true;
    this.$store.dispatch(
      "OrganizationsModule/onUpdateOrganization",
      organization
    );
  }
}
</script>

<style lang="scss" scoped>
a {
  color: var(--v-secondary-base) !important;
}
</style>
