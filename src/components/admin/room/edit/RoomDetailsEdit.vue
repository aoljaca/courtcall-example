<template>
  <div>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4 details-label-text font-weight-bold">
          {{ $t("admin.roomDetails.roomName") }}
        </div>
        <v-text-field
          :rules="rules"
          counter
          maxlength="25"
          clearable
          dense
          :placeholder="roomDetails.name"
        >
        </v-text-field>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn
          :title="$t('admin.roomDetails.cancel')"
          color="grey lighten-1 rounded-0 white--text"
          depressed
          class="mr-6"
        >
          <router-link 
            v-if="isCreate" class="remove-decoration" 
            :to="{
                name: 'Dashboard',
            }"
          >
            {{ $t("admin.roomDetails.cancel") }}
          </router-link>
          <router-link 
            v-else class="remove-decoration" 
            :to="{
                name: 'View Room',
                params: { roomId },
            }"
          >
            {{ $t("admin.roomDetails.cancel") }}
          </router-link>
        </v-btn>
        <v-btn
          :title="$t('admin.roomDetails.saveChanges')"
          color="grey darken-4 rounded-0 white--text"
          depressed
        >
          {{ $t("admin.roomDetails.saveChanges") }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4 details-label-text font-weight-bold">
          {{ $t("admin.roomDetails.organizationAlternate") }}
        </div>
        <v-autocomplete
          item-text="name"
          v-model="organization"
          :items="organizations"
          dense
          return-object
          @change="setOrganization()"
        ></v-autocomplete>
      </v-col>
      <v-col cols="2" class="d-flex px-8">
        <div class="pr-4 details-label-text font-weight-bold">
          {{ $t("admin.roomDetails.status") }}
        </div>
        <v-select :items="items" dense> </v-select>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col class="d-flex justify-end">
        <v-btn
          :title="$t('admin.roomDetails.saveTemplate')"
          color="white--text grey darken-4 rounded-0"
          depressed
        >
          {{ $t("admin.roomDetails.saveTemplate") }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <v-col cols="3" class="pa-8 template-entry-bg">
        <v-row class="justify-center">
          <v-col cols="12">
            <v-autocomplete
              item-text="roomSettings.template"
              v-model="template"
              :items="templates"
              dense
              return-object
              @change="setTemplate()"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              :title="$t('admin.roomDetails.cancel')"
              color="grey lighten-1 rounded-0 white--text"
              depressed
              class="mr-6"
            >
              {{ $t("admin.roomDetails.cancel") }}
            </v-btn>
            <v-btn
              :title="$t('admin.roomDetails.save')"
              color="grey darken-4 rounded-0 white--text"
              depressed
            >
              {{ $t("admin.roomDetails.save") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NULL_ROOM_DETAILS } from "@/model/admin/room/room-details";
import "reflect-metadata";
import { Organization } from "@/model/admin/organization/organization";
import { RoomTemplate } from "@/model/admin/room/room-template";
import systemUser from "@/plugins/i18n/en-us/admin/system-user/system-user";
@Component
export default class RoomDetailsEdit extends Vue {
  roomId = this.$route.params.roomId;

  rules = [(v: string | any[]) => (v && v.length <= 25) || "Max 25 characters"];

  isCreate = false;

  items = [this.$t("admin.roomDetails.draft"), this.$t("admin.roomDetails.available")];

  template = {};

  templates: RoomTemplate[] = this.$store.getters["RoomTemplateModule/getAsList"];
  
  organizations: Organization[] = this.$store.getters["OrganizationsModule/getAsList"];

  organization: Organization = this.$store.getters[
    "OrganizationsModule/getById"
  ](this.systemUserMe.organizationIds[0]);

  mounted(): void {
    if(this.$route.fullPath === "/admin/rooms/create") {
      this.isCreate = true;
      this.template = this.$store.getters["RoomTemplateModule/getByOrgId"](this.systemUserMe.organizationIds[0])[0];
    } else {
      this.template = (this.$store.getters["RoomModule/getById"](this.$route.params.roomId).template);
    }
  }

  setTemplate() {
    this.roomDetails.template = this.template.uuid;
  }

  setOrganization() {
    this.roomDetails.organization = this.organization.id;
  }

  get systemUserMe() {
    return this.$store.state.SystemUsersModule.me;
  }

  get roomDetails() {
    if (!this.$store.state.RoomModule.rooms[this.roomId]) {
      return NULL_ROOM_DETAILS;
    }

    return this.$store.state.RoomModule.rooms[this.roomId]
      .roomDetails;
  }
}
</script>

<style lang="scss" scoped>
.details-label-text {
  font-size: 1rem;
}
a {
  text-decoration: none;
  color: white !important;
}
.template-entry-bg {
  background: #f5f5f5;
}
</style>
