<template>
  <div>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4 settings-sub-header">
          Room Name
        </div>
        <v-text-field :rules="rules" counter maxlength="25" clearable dense v-model="franksRoom">
        </v-text-field>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn
        style="color: white" 
        color="grey lighten-1 rounded-0"
        depressed
        class="mr-6"
        >
        <router-link class="remove-decoration" to="/admin/room/view">
        CANCEL
        </router-link>
        </v-btn>
        <v-btn
        style="color: white" 
        color="grey darken-4 rounded-0"
        depressed
        >
        SAVE CHANGES
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="4">
        <div class="pr-4 settings-sub-header">
          Organization
        </div>
        <v-text-field :rules="rules" counter maxlength="25" clearable dense v-model="org">
        </v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex px-8">
        <div class="pr-4 settings-sub-header">
          Status
        </div>
        <v-select :items="items" dense>
        </v-select>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col class="d-flex justify-end">
        <v-btn  
        style="color: white" 
        color="grey darken-4 rounded-0"
        depressed
        >
        SAVE AS NEW TEMPLATE
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <v-col 
        cols="3" 
        style="background: #F5F5F5;" 
        class="pa-8"
      >
        <v-row class="justify-center">
          <v-col cols="12">
            <v-text-field :rules="rules" counter maxlength="25" clearable dense v-model="temp" label="Enter Template Name">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end">
              <v-btn  
              style="color: white" 
              color="grey lighten-1 rounded-0"
              depressed
              class="mr-6"
              >
              CANCEL
              </v-btn>
              <v-btn  
              style="color: white" 
              color="grey darken-4 rounded-0"
              depressed
              >
              SAVE
              </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class RoomDetailsEdit extends Vue {
  get roomDetails() {
    return this.$store.getters["AdminRoomModule/selectedRoomDetails"];
  }

  franksRoom = "Judge Frank's Room";
  org = "LA County Superior Court - 12345";
  temp = "Enter template name"
  description = this.roomSettings.passcode;
  rules = [(v: string|any[]) => v.length <= 25 || 'Max 25 characters'];
  items = ["Draft", "Available"];
}
</script>

<style lang="scss" scoped>
.settings-sub-header {
  font-weight: 700;
  font-size: 1rem;
}
.settings-edit-header {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
}
a {
  text-decoration: none;
  color: white !important;
}
</style>
