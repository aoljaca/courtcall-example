<template>
  <span id="moveIcon">
    <v-menu :close-on-content-click="false" offset-y :nudge-top="400">
      <template v-slot:activator="{ on, attrs }">
        <v-container fluid>
          <v-row class="px-0 py-0">
            <v-col class="px-0 py-0">
              <v-btn
                v-bind="attrs"
                v-on="on"
                fab
                elevation="0"
                :title="$t('meetingUI.controlBar.moveParticipants.title')"
              >
                <v-icon>mdi-exit-to-app</v-icon>
              </v-btn></v-col
            >
          </v-row>
          <v-row class="py-0 px-0">
            <v-col
              class="py-0 px-0 control-bar-icon-font d-flex justify-center"
              >{{ $t("meetingUI.controlBar.moveParticipants.title") }}</v-col
            >
          </v-row>
        </v-container>
      </template>
      <v-card height="280" width="600">
        <v-card-text class="move-box">
          <v-container>
            <v-row>
              <v-col>
                <v-select
                  v-model="selectedSubconference"
                  :items="possibleSubconferences"
                  item-text="displayName"
                  :label="
                    $t('meetingUI.controlBar.moveParticipants.description')
                  "
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container fluid>
            <v-row class="justify-space-between">
              <v-col class="py-0">
                <v-btn elevation="0" :title="$t('general.cancel')">{{
                  $t("general.cancel")
                }}</v-btn>
              </v-col>
              <v-col class="py-0 d-flex justify-end">
                <v-btn elevation="0" :title="$t('general.submit')">{{
                  $t("general.submit")
                }}</v-btn>
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
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
@Component({})
export default class MoveIcon extends Vue {
  selectedSubconference: SubConference | null = null;

  get possibleSubconferences(): SubConference[] {
    return this.$store.getters["SubconferenceModule/getAsList"];
  }
}
</script>
<style lang="scss" scoped>
.move-box {
  height: 200px;
}
</style>
