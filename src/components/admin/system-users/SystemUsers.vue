<template>
  <div id="systemUsersList">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h2>{{ $t("admin.systemUser.title") }}</h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn :title="$t('admin.systemUser.new.title')" elevation="0" fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="HEADERS" :items="systemUsers">
            <template v-slot:[`item.roles`]="{ item }">
              <div
                class="py-1 px-1 d-inline-block"
                v-for="id in item.roles"
                :key="id"
              >
                <v-chip>{{ roleName(id) }}</v-chip>
              </div>
            </template>
            <template v-slot:[`item.organizations`]="{ item }">
              <div
                class="py-1 px-1 d-inline-block"
                v-for="id in item.organizations"
                :key="id"
              >
                <v-chip>{{ organizationName(id) }}</v-chip>
              </div>
            </template>
            <template v-slot:[`item.more`]="">
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
                  <v-list-item>{{ $t("general.view") }}</v-list-item>
                  <v-list-item>{{ $t("general.edit") }}</v-list-item>
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
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class SystemUsers extends Vue {
  readonly HEADERS = [
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Email Address",
      value: "email",
    },
    {
      text: "Role",
      value: "roles",
      sortable: false,
      filterable: false,
      width: "20%",
    },
    {
      text: "Organization",
      value: "organizations",
      sortable: false,
      filterable: false,
      width: `20%`,
    },
    {
      text: "More",
      value: "more",
      sortable: false,
      filterable: false,
    },
  ];

  get systemUsers(): Participant[] {
    return this.$store.getters["ParticipantsModule/getSystemUsersAsList"];
  }

  roleName(id: string): string {
    return this.$store.getters["PermissionsModule/getRoleById"](id)?.name;
  }

  organizationName(id: string): string {
    return this.$store.getters["OrganizationsModule/getById"](id)?.name;
  }
}
</script>