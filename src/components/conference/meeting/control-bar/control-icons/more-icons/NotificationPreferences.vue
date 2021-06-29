<template>
  <div id="notificationPreferences">
    <v-card>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center pb-0">
            <span>{{
              $t(
                "meetingUI.controlBar.more.notificationPreferences.description"
              )
            }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center py-0">
            <v-switch
              :title="
                $t(
                  'meetingUI.controlBar.more.notificationPreferences.toggleNotifications'
                )
              "
            >
            </v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text-align-center d-flex pt-0">
              {{ $t("meetingUI.controlBar.more.notificationPreferences.note") }}
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class NotificationPreferences extends Vue {}
</script>
