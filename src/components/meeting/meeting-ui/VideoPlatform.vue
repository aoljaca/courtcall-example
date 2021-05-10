<template>
  <div id="videoPlatform">
    <v-container fluid>
      <v-row>
        <v-col class="px-0 py-0">
          <v-hover id="hoverElement">
            <template v-slot="{hover}">
              <div>
                <v-container fluid>
                  <v-row>
                    <v-col class="px-0 py-0 video-platform-col"> Test </v-col>
                  </v-row>
                </v-container>
                <v-fade-transition>
                  <v-overlay
                    absolute
                    class="video-platform-overlay"
                    v-if="hover"
                    opacity="0"
                  >
                    <v-container fluid>
                      <v-row>
                        <v-col>
                          <v-btn
                            fab
                            color="primary"
                            :title="$t('meetingUI.videoPlatform.fullscreen')"
                          >
                            <v-icon>mdi-fullscreen</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn
                            fab
                            color="primary"
                            :title="$t('meetingUI.videoPlatform.gridView')"
                          >
                            <v-icon>mdi-grid</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn
                            fab
                            color="primary"
                            :title="$t('meetingUI.videoPlatform.speakerView')"
                          >
                            <v-icon>mdi-account</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-btn
                            fab
                            color="primary"
                            :title="$t('meetingUI.videoPlatform.pinnedView')"
                          >
                            <v-icon>mdi-map-marker</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-overlay>
                </v-fade-transition>
              </div>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class VideoPlatform extends Vue {}
</script>
<style lang="scss">
.video-platform-overlay {
   height: 86vh;
   width: 10%;
   min-height: 500px;
   max-width: 100%;
  .v-overlay__content {
    height: 100% !important;
    width: 100% !important;
    color: black;
  }
}
</style>
<style lang="scss" scoped>
.video-platform-col {
  height: 86vh;
  min-height: 500px;
}
</style>
