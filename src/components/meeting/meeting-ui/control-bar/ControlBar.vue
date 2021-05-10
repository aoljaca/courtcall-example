<template>
  <div id="controlBar" class="control-bar-background">
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <span class="pr-1">
            <v-btn fab elevation="0">
              <v-icon>mdi-microphone</v-icon>
            </v-btn>
          </span>
          <span>
            <v-btn fab elevation="0">
              <v-icon>mdi-video</v-icon>
            </v-btn>
          </span>
        </v-col>
        <v-col cols="9" class="d-flex justify-center"></v-col>
        <v-col cols="1">
            <v-btn fab elevation="0">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ControlBar extends Vue {}
</script>
<style lang="scss" scoped>
.control-bar-background {
  background-color: lightgray;
  height: 10vh;
  min-height: 100px;
}
</style>
