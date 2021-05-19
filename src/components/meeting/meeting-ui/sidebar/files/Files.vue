<template>
  <div id="fileSidebar">
    <v-container fluid>
      <v-row>
        <v-col
          ><h2>{{ $t("sidebar.files.title") }}</h2></v-col
        >
      </v-row>
      <v-row>
        <v-col class="px-0 py-0">
          <file-main-view v-if="shouldShowMainView()"></file-main-view>
          <file-upload v-if="shouldShowUpload()"></file-upload>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FileMainView from "./FileMainView.vue";
import FileUpload from "./Upload.vue";
@Component({
  components: {
    FileMainView,
    FileUpload,
  },
})
export default class Files extends Vue {
  get creating(): boolean {
    return this.$store.state.FileShareModule.creating;
  }

  get editing(): boolean {
    return this.$store.state.FileShareModule.editing;
  }

  shouldShowUpload(): boolean {
    return this.creating || this.editing;
  }

  shouldShowMainView() {
    return !this.creating && !this.editing;
  }
}
</script>
