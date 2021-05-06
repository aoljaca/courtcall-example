<template>
  <div id="avOptions">
      <v-dialog v-model="dialog" width="1000">
          <v-card>
              <v-card-text class="main-modal">
                  <v-container>
                      <v-row>
                          <v-col class="d-flex justify-center">
                              <h1>CourtCall</h1>
                          </v-col>
                      </v-row>
                      <v-row>
                          <v-col class="d-flex justify-center">
                              <h2>{{$t('avOptions.allowUseHeader')}}</h2>
                          </v-col>
                      </v-row>
                      <v-row>
                          <v-col class="d-flex justify-center">
                              <span class="text-align-center">{{$t('avOptions.allowUseDescription')}}</span>
                          </v-col>
                      </v-row>
                  </v-container>
                  <v-divider></v-divider>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn elevation="0" text @click="dialog = false">{{$t('general.dismiss')}}</v-btn>
                  </v-card-actions>
              </v-card-text>
          </v-card>
      </v-dialog>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="d-inline">CourtCall</h1>
          <h2 class="d-inline pl-1">Room Name</h2>
        </v-col>
      </v-row>
      <v-row class="justify-md-space-between">
          <v-col cols="4">
              <span class="d-block">
              <h2 class="d-inline">{{$t('avOptions.internetConnection')}}</h2>
              <h3 class="d-inline pl-2">Good</h3>
            </span>
            <span class="d-block">
                <h2 class="d-inline">{{$t('avOptions.courtcallSystem')}}</h2>
                <h3 class="d-inline pl-2">Connected</h3>
                </span>
            </v-col>
          <v-col cols="4" class="d-flex justify-end align-center">
              <v-btn><v-icon>mdi-help-circle</v-icon><span class="pl-1">{{$t('general.getHelp')}}</span></v-btn>
          </v-col>
      </v-row>
      <hr/>
      <v-row>
          <v-col md="6">Video Setup</v-col>
          <v-col md="6">Audio Setup</v-col>
      </v-row>
      <v-row class="justify-center">
          <v-col cols="2" class="d-flex justify-end">
              <v-switch :label="$t('general.video')"></v-switch>
          </v-col>
          <v-col cols="2" class="d-flex justify-start">
              <v-switch :label="$t('general.audio')"></v-switch>
          </v-col>
      </v-row>
      <v-row>
          <v-col class="d-flex justify-center">
              <v-switch :label="$t('avOptions.savePreferences')"></v-switch> 
          </v-col>
      </v-row>
      <v-row>
          <v-col class="d-flex justify-center">
              <v-btn color="primary">{{$t('avOptions.joinMeeting')}}</v-btn>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AvOptions extends Vue {
    dialog = false;

    mounted() {
        console.log('mounted')
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            stream.getTracks().forEach(t => t.stop())
        });
    }
}
</script>
<style lang="scss" scoped>
.main-modal {
    color: black !important;
}
</style>