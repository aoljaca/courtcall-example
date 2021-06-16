<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="750px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :title="$t('admin.roomTemplate.selectTemplate')"
          color="grey darken-4 rounded-0 white--text"
          depressed
          v-bind="attrs"
          v-on="on"
        >
          {{ $t("admin.roomTemplate.selectTemplate") }}
        </v-btn>
      </template>
      <v-card class="pa-4">
        <v-row class="mx-3">
          <v-col class="templates-header font-weight-bold">{{
            $t("admin.roomTemplate.roomTemplate")
          }}</v-col>
          <v-col class="d-flex justify-end">
            <v-icon x-large @click="dialog = false"> mdi-close </v-icon>
          </v-col>
        </v-row>
        <v-row class="my-1 mx-3">
          <v-col cols="4">
            <span>
              {{ $t("admin.roomTemplate.available") }}
            </span>
            <span> ({{ templatesSum }}) </span>
          </v-col>
          <v-col>
            <span>
              {{ $t("admin.roomTemplate.sort") }}
            </span>
            <span>
              {{ $t("admin.roomTemplate.created") }}
            </span>
            <span>
              {{ $t("admin.roomTemplate.alphabetical") }}
            </span>
          </v-col>
        </v-row>
        <v-card-text class="v-card-height">
          <v-row dense v-model="dialogm1" column>
            <v-col class="templates">
              <v-divider> </v-divider>
              <div v-for="template in templateNames" :key="template">
                <saved-template :name="template"> </saved-template>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SavedTemplate from "@/components/admin/room/edit/room-templates/SavedTemplate.vue";
import "reflect-metadata";
@Component({
  components: {
    SavedTemplate,
  },
})
export default class RoomTemplates extends Vue {
  dialogm1 = "";
  dialog = false;
  templateNames = this.$store.getters[
    "RoomTemplateModule/getTemplateNamesList"
  ];
  templatesSum = this.templateNames.length;
}
</script>

<style lang="scss" scoped>
.templates-header {
  font-size: 2rem;
  line-height: 2rem;
}
.close-large button {
  font-size: 2rem;
}
.v-card-height {
  height: 50vh;
}
</style>
