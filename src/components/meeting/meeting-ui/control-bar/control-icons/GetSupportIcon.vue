<template>
  <span id="getSupportIcon">
    <v-menu :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-container fluid>
          <v-row class="px-0 py-0">
            <v-col class="px-0 py-0">
              <v-btn
                fab
                elevation="0"
                :title="$t('meetingUI.controlBar.getSupport.title')"
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
              >{{ $t("meetingUI.controlBar.getSupport.title") }}</v-col
            >
          </v-row>
        </v-container>
      </template>
      <v-card height="280" width="600">
          <v-card-text>
              <v-textarea 
              counter="300" 
               :label="$t('meetingUI.controlBar.getSupport.description')"></v-textarea>
          </v-card-text>
          <v-card-actions>
              <v-container fluid>
                  <v-row class="justify-space-between">
                      <v-col class="px-0 py-0">
                          <v-btn elevation="0">{{$t('meetingUI.controlBar.getSupport.cancelRequest')}}</v-btn>
                      </v-col>
                      <v-col class="px-0 py-0 d-flex justify-end">
                           <v-btn color="primary" elevation="0">{{$t('meetingUI.controlBar.getSupport.sendRequest')}}</v-btn>
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
