<template>
  <span id="moreIcon">
    <v-menu offset-y :nudge-top="500">
      <template v-slot:activator="{ on, attrs }">
        <v-container fluid>
          <v-row class="px-0 py-0">
            <v-col class="px-0 py-0">
              <v-btn
                fab
                v-bind="attrs"
                v-on="on"
                elevation="0"
                :title="$t('meetingUI.controlBar.more.title')"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn></v-col
            >
          </v-row>
          <v-row class="py-0 px-0">
            <v-col
              class="py-0 px-0 control-bar-icon-font d-flex justify-center"
              >{{ $t("meetingUI.controlBar.more.title") }}</v-col
            >
          </v-row>
        </v-container>
      </template>
      <v-list>
        <v-list-item>
          <v-icon>mdi-bell-plus</v-icon>
          {{$t('meetingUI.controlBar.more.sendNotification.title')}}
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account-supervisor</v-icon>
          {{$t('meetingUI.controlBar.more.inviteParticipants.title')}}
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-record</v-icon>
          <span class="pl-1"> {{$t('meetingUI.controlBar.more.record.title')}}</span>
         
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-image-multiple</v-icon>
          {{$t('meetingUI.controlBar.more.changeBackground.title')}}
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-video</v-icon>
          {{$t('meetingUI.controlBar.more.avSetup.title')}}
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-bell</v-icon>
          {{$t('meetingUI.controlBar.more.notificationPreferences.title')}}
        </v-list-item>
        <v-list-item>
          <v-icon>
            mdi-closed-caption
          </v-icon>
          {{$t('meetingUI.controlBar.more.transcription.title')}}
        </v-list-item>
        <v-list-item>
          <v-icon>
            mdi-wifi
          </v-icon>
          {{$t('meetingUI.controlBar.more.publicStreaming.title')}}
        </v-list-item>
      </v-list>
    </v-menu>
  </span>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class MoreIcon extends Vue {}
</script>
