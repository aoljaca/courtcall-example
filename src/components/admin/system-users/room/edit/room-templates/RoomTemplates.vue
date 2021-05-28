<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="750px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="color: white" 
          color="grey darken-4 rounded-0"
          depressed
          v-bind="attrs"
          v-on="on"
        >
          SELECT TEMPLATE (OPTIONAL)
        </v-btn>
      </template>
      <v-card>
        <v-row class="mx-3">
          <v-col>Room Templates</v-col>
          <v-col class="d-flex justify-end">
            <v-icon @click="dialog = false">
              mdi-close
            </v-icon>
          </v-col>
        </v-row>
        <v-card-text style="height: 50vh;">
          <v-row 
            style="flex-direction: column"
            dense
            v-model="dialogm1"
            column
          >
            <v-col class="templates">
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
                <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
                <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
              <saved-template>
              </saved-template>
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
import SavedTemplate from "@/components/admin/system-users/room/edit/room-templates/SavedTemplate.vue"
import "reflect-metadata";
@Component({
  components: {
    SavedTemplate,
  },
})
export default class RoomTemplates extends Vue {
  dialogm1 = '';
  dialog = false;
}
</script>

<style lang="scss" scoped>
</style>
