<template>
  <div id="meetingUI">
    <v-container fluid>
      <v-row>
          <v-col class="py-0 header-col">header</v-col>
      </v-row>
      <v-row>
        <v-col class="px-0 py-0">
          <v-container fluid>
            <v-row>
              <v-col class="px-0 py-0">
                <video-platform></video-platform>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="px-0 py-0">
                <control-bar></control-bar>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="2" class="navigation-element" v-if="true">
            Navigation
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ControlBar from "./control-bar/ControlBar.vue";
import VideoPlatform from "./VideoPlatform.vue";
import "reflect-metadata";
@Component({
  components: {
    ControlBar,
    VideoPlatform,
  },
})
export default class MeetingUI extends Vue {
  drawer = true;
}
</script>
<style lang="scss" scoped>
.header-col {
    height: 4vh;
    background: lightgray;
}
.navigation-element {
    border-left: 1px solid black;
}
</style>
<style lang="scss"></style>
