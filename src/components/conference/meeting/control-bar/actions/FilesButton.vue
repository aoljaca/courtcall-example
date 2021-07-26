<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-btn
          icon
          dark
          x-large
          outlined
          depressed
          class="pa-5"
          @click="toggleFilesSidebar()"
          :title="$t('conference.meeting.controlBar.files')"
        >
          <v-icon>mdi-file-multiple</v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">
          {{ $t("conference.meeting.controlBar.files") }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class FilesButton extends Vue {
  toggleFilesSidebar(): void {
    this.$store.dispatch("SidebarModule/alterSidebarMode", {
      sidebarMode: "files",
    });
  }
}
</script>
