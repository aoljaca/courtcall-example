<template>
  <div>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4 details-label-text font-weight-bold">{{ $t("admin.roomDetails.roomName") }}</div>
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
          <router-link class="remove-decoration" :to="settingsViewPath">
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
        <div class="pr-4 details-label-text font-weight-bold">{{ $t("admin.roomDetails.organizationAlternate") }}</div>
        <v-text-field
          :rules="rules"
          counter
          maxlength="25"
          clearable
          dense
          :placeholder="roomDetails.organization"
        >
        </v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex px-8">
        <div class="pr-4 details-label-text font-weight-bold">{{ $t("admin.roomDetails.status") }}</div>
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
              @click="logObj()"
              :rules="rules"
              v-model="value"
              :items="templateNames"
              dense
              clearable
              :label="$t('admin.roomDetails.templateName')"
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
@Component
export default class RoomDetailsEdit extends Vue {
  value = "null";
  rules = [(v: string | any[]) => v.length <= 25 || "Max 25 characters"];
  items = ["Draft", "Available"];

  settingsViewPath = "/admin/room/view/" + this.$route.params.roomId;

  templateNames = this.$store.getters["RoomTemplateModule/getTemplateNamesList"];

  get roomDetails() {
    if(!this.$store.state.RoomModule.rooms[this.$route.params.roomId]) {
      return NULL_ROOM_DETAILS;
    }

    return this.$store.state.RoomModule.rooms[this.$route.params.roomId].roomDetails;
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
