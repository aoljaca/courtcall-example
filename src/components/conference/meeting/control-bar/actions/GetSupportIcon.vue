<template>
  <span id="getSupportIcon">
    <v-menu :close-on-content-click="false" offset-y :nudge-top="400">
      <template v-slot:activator="{ on, attrs }">
        <v-container fluid>
          <v-row class="px-0 py-0">
            <v-col class="px-0 py-0 d-flex justify-center">
              <v-btn
                icon
                elevation="0"
                :title="$t('conference.meeting.controlBar.getSupport.title')"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-exclamation-thick</v-icon>
              </v-btn></v-col
            >
          </v-row>
          <v-row class="py-0 px-0">
            <v-col
              class="py-0 px-0 control-bar-icon-font d-flex justify-center"
              >{{ $t("conference.meeting.controlBar.getSupport.title") }}</v-col
            >
          </v-row>
        </v-container>
      </template>
      <v-card>
        <v-card-text>
          <v-textarea
            counter="300"
            :label="$t('conference.meeting.controlBar.getSupport.description')"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-container fluid>
            <v-row class="justify-space-between">
              <v-col class="px-0 py-0">
                <v-btn :title="$t('general.cancel')" elevation="0">{{
                  $t("general.cancel")
                }}</v-btn>
              </v-col>
              <v-col class="px-0 py-0 d-flex justify-end">
                <v-btn
                  :title="
                    $t('conference.meeting.controlBar.getSupport.cancelRequest')
                  "
                  color="primary"
                  elevation="0"
                  >{{
                    $t("conference.meeting.controlBar.getSupport.sendRequest")
                  }}</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-menu>
  </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class GetSupportIcon extends Vue {}
</script>
