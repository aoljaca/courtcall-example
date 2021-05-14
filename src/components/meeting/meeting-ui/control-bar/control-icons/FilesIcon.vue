<template>
  <span id="filesIcon">
    <v-container fluid>
      <v-row class="px-0 py-0">
        <v-col class="px-0 py-0">
          <v-btn
            fab
            elevation="0"
            @click="toggleFilesSidebar()"
            :title="$t('meetingUI.controlBar.files')"
          >
            <v-icon>mdi-file-multiple</v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="py-0 px-0">
        <v-col class="py-0 px-0 control-bar-icon-font d-flex justify-center">{{
          $t("meetingUI.controlBar.files")
        }}</v-col>
      </v-row>
    </v-container>
  </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class FilesIcon extends Vue {
  toggleFilesSidebar() {
    this.$store.dispatch("SidebarModule/alterSidebarMode", {
      sidebarMode: "files",
    });
  }
}
</script>
