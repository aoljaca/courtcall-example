<template>
  <div id="record">
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-select
              :label="
                $t('conference.meeting.controlBar.more.record.description')
              "
              :items="possibleSubconferences"
              v-model="selectedSubconference"
              return-object
              item-text="displayName"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="0">{{ $t("general.cancel") }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn elevation="0">{{
              $t("conference.meeting.controlBar.more.record.startRecording")
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
@Component
export default class Record extends Vue {
  selectedSubconference: SubConference | null = null;
  possibleSubconferences: SubConference[] = this.$store.getters[
    "SubconferenceModule/getAsList"
  ];
}
</script>
