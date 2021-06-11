<template>
  <v-row>
    <v-dialog v-model="dialog" width="500" max-width="750px">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="grey darken-4 rounded-0 white--text"
          depressed
          v-bind="attrs"
          v-on="on"
        >
          mdi-delete
        </v-icon>
      </template>
          <v-row v-model="dialogm1" class="grey lighten-2 v-card-height pa-8">
            <v-row id="delete-confirmation">
              <v-col class="pa-4 text-center">
                <div class="font-weight-black text-h6">
                  {{ $t('admin.roomTemplate.deleteConfirmation') }}
                </div>
                <div>
                  {{ $t('admin.roomTemplate.deleteDescription') }}
                </div>
              </v-col>
            </v-row>
            <v-row dense id="delete-template-controls">
              <v-col class="d-flex justify-end">
                <v-btn
                  :title="$t('admin.roomTemplate.cancel')"
                  color="grey lighten-1 rounded-0 white--text"
                  depressed
                  class="mx-6"
                  @click="dialog = false"
                >
                  {{ $t("admin.roomTemplate.cancel") }}
                </v-btn>
                <v-btn
                  :title="$t('admin.roomDetails.delete')"
                  color="grey darken-4 rounded-0 white--text"
                  depressed
                >
                  {{ $t("admin.roomTemplate.delete") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class DeleteTemplate extends Vue {
  dialogm1 = "";
  dialog = false;
}
</script>

<style lang="scss" scoped>
.v-card-height {
  height: 35vh;
}
</style>
