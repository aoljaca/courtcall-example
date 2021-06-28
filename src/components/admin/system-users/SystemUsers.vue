<template>
  <div id="systemUsersList">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h2>{{ $t("admin.systemUsers.list.pageTitle") }}</h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn
            :disabled="!canCreateUser"
            :to="{ name: 'Create System User' }"
            :title="$t('admin.systemUsers.list.create')"
            elevation="0"
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="HEADERS" :items="systemUsers">
            <template v-slot:[`item.name`]="{ item }">
              <router-link
                :to="{ name: 'System User', params: { systemUserId: item.id } }"
              >
                {{ item.name }}
              </router-link>
            </template>
            <template v-slot:[`item.organizations`]="{ item }">
              <template v-if="item.organizationIds.length">
                <div
                  class="py-1 px-1 d-inline-block"
                  v-for="id in item.organizationIds"
                  :key="id"
                >
                  <v-chip>{{ organizationName(id) }}</v-chip>
                </div>
              </template>
              <span v-else>
                {{ $t("admin.systemUsers.list.none") }}
              </span>
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
                      name: 'System User',
                      params: { systemUserId: item.id },
                      query: { startEditing: true },
                    }"
                    >{{ $t("general.edit") }}</v-list-item
                  >
                  <v-list-item>{{ $t("general.archive") }}</v-list-item>
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
import { DataTableHeader } from "vuetify";
import { SystemUser } from "../../../model/admin/system-users/system-user";
@Component({})
export default class SystemUsers extends Vue {
  readonly HEADERS: DataTableHeader[] = [
    {
      text: `${this.$t("admin.systemUsers.list.name")}`,
      value: "name",
      cellClass: "font-weight-bold",
    },
    {
      text: `${this.$t("admin.systemUsers.list.email")}`,
      value: "email",
      cellClass: "font-weight-bold",
    },
    {
      text: `${this.$t("admin.systemUsers.list.role")}`,
      value: "role.name",
      sortable: false,
      filterable: false,
      width: "20%",
    },
    {
      text: `${this.$t("admin.systemUsers.list.organizations")}`,
      value: "organizations",
      sortable: false,
      filterable: false,
      width: `20%`,
    },
    {
      text: "",
      value: "more",
      sortable: false,
      filterable: false,
      align: "end",
    },
  ];

  get systemUsers(): SystemUser[] {
    return this.$store.getters["SystemUsersModule/getAsList"];
  }

  get canCreateUser(): boolean {
    return this.$store.getters["SystemUsersModule/isActingUserAdmin"];
  }

  organizationName(id: string): string {
    return this.$store.getters["OrganizationsModule/getById"](id)?.name;
  }
}
</script>

<style lang="scss" scoped>
a {
  color: var(--v-secondary-base) !important;
}
</style>
