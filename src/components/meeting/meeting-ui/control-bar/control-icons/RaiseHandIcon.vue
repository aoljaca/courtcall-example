<template>
  <span id="raiseHandIcon">
    <v-container fluid>
      <v-row class="px-0 py-0">
        <v-col class="px-0 py-0">
          <v-btn
            fab
            elevation="0"
            :title="$t('meetingUI.controlBar.raiseHand')"
          >
            <v-icon>mdi-human-greeting</v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="py-0 px-0">
        <v-col class="py-0 px-0 control-bar-icon-font d-flex justify-center">{{
          $t("meetingUI.controlBar.raiseHand")
        }}</v-col>
      </v-row>
    </v-container>
  </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RaiseHandIcon extends Vue {}
</script>
