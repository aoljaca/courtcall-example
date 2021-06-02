<template>
  <div id="casesView">
    <v-container fluid>
      <v-row>
        <v-col>
          <span class="font-weight-bold">{{
            $t("sidebar.participants.cases.videoAudioControls")
          }}</span>
        </v-col>
      </v-row>
      <v-row class="pb-1">
        <v-col cols="6">
          <v-btn
            @click="muteAllVideo()"
            elevation="0"
            v-if="controlAllVideoMode === 'mute'"
          >
            <v-icon>mdi-video</v-icon>
            {{ $t("sidebar.participants.cases.stopVideo") }}
          </v-btn>
          <v-btn @click="unmuteAllVideo()" elevation="0" v-else>
            <v-icon>mdi-video-off</v-icon>
            {{ $t("sidebar.participants.cases.startVideo") }}
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            @click="muteAllAudio()"
            elevation="0"
            v-if="controlAllAudioMode === 'mute'"
          >
            <v-icon>mdi-microphone</v-icon>
            {{ $t("sidebar.participants.cases.mute") }}
          </v-btn>
          <v-btn @click="unmuteAllAudio()" v-else elevation="0">
            <v-icon>mdi-microphone-off</v-icon>
            {{ $t("sidebar.participants.cases.unmute") }}
          </v-btn>
        </v-col>
      </v-row>
      <hr />
      <v-row>
        <v-col>
          <v-text-field
            :label="$t('sidebar.participants.searchLabel')"
            append-icon="mdi-magnify"
            v-model="searchTerm"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="c in cases" :key="c.id">
              <v-expansion-panel-header>{{
                formatCase(c)
              }}</v-expansion-panel-header>
              <v-expansion-panel-content class="case-content">
                <v-container fluid>
                  <v-row>
                    <v-col>
                      <div v-if="c.live">
                        <v-btn elevation="0">{{ $t("general.stop") }}</v-btn>
                        <span class="font-weight-bold">{{
                          $t("sidebar.participants.cases.liveCase")
                        }}</span>
                      </div>
                      <v-btn v-else elevation="0">{{
                        $t("general.start")
                      }}</v-btn>
                    </v-col>
                  </v-row>
                  <v-row v-for="p in participantsForCase(c)" :key="p.id">
                    <v-col>
                      <participant-control
                        :participant="p"
                      ></participant-control>
                    </v-col>
                  </v-row>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { CaseFormatService } from "@/services/case-format";
import { ParticipantSearchService } from "@/services/participant-search";
import { inject } from "inversify-props";
import { Component, Vue } from "vue-property-decorator";
import ParticipantControl from "./ParticipantControl.vue";
@Component({
  components: {
    ParticipantControl,
  },
})
export default class CasesView extends Vue {
  @inject(INJECTION_TYPES.CASE_FORMAT)
  caseFormatService: CaseFormatService | undefined;

  @inject(INJECTION_TYPES.PARTICIPANT_SEARCH)
  participantSearchService: ParticipantSearchService | undefined;

  controlAllVideoMode: "unmute" | "mute" = "mute";

  controlAllAudioMode: "unmute" | "mute" = "mute";

  searchTerm = "";

  muteAllAudio(): void {
    this.controlAllAudioMode = "unmute";
  }

  muteAllVideo(): void {
    this.controlAllVideoMode = "unmute";
  }

  unmuteAllAudio(): void {
    this.controlAllAudioMode = "mute";
  }

  unmuteAllVideo(): void {
    this.controlAllVideoMode = "mute";
  }

  get cases(): Case[] {
    return this.$store.getters["CasesModule/getAsList"];
  }

  formatCase(c: Case): string | undefined {
    return this.caseFormatService?.formatCase(c);
  }

  participantsForCase(c: Case): Participant[] {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    return participants
      .filter((p) => p.caseId === c.id)
      .filter((p) =>
        this.participantSearchService?.search({
          term: this.searchTerm,
          participant: p,
          case: c,
        })
      );
  }
}
</script>
<style lang="scss">
.case-content {
  .v-expansion-panel-content__wrap {
    padding: 0;
  }
}
</style>