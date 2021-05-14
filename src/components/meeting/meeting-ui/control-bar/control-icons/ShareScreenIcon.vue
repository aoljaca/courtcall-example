<template>
  <span id="shareScreenIcon">
    <v-container fluid>
      <v-row class="px-0 py-0">
        <v-col class="px-0 py-0">
          <v-btn
            fab
            elevation="0"
            :title="$t('meetingUI.controlBar.shareScreen.title')"
          >
            <v-icon>mdi-laptop</v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="py-0 px-0">
        <v-col class="py-0 px-0 control-bar-icon-font d-flex justify-center">{{
          $t("meetingUI.controlBar.shareScreen.title")
        }}</v-col>
      </v-row>
    </v-container>
  </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ShareScreenIcon extends Vue {}
</script>
