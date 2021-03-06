<template>
  <div id="participantControl">
    <v-card>
      <v-card-title class="card-title">{{ participant.name }}</v-card-title>
      <v-card-text class="card-text">
        <v-container fluid>
          <v-row>
            <v-col cols="1">
              <v-icon
                color="green"
                v-if="participant.active"
                :title="$t('sidebar.participants.participantControl.active')"
              >
                mdi-account-circle
              </v-icon>
              <v-icon
                v-else
                :title="$t('sidebar.participants.participantControl.inactive')"
                >mdi-account-circle</v-icon
              >
            </v-col>
            <v-col cols="1">
              <v-icon
                v-if="participant.videoStatus === 'unmuted'"
                :title="$t('general.videoOn')"
                >mdi-video</v-icon
              >
              <v-icon v-else :title="$t('general.videoOff')"
                >mdi-video-off</v-icon
              >
            </v-col>
            <v-col cols="1">
              <v-icon
                v-if="participant.audioStatus === 'unmuted'"
                :title="$t('general.unmuted')"
                >mdi-microphone</v-icon
              >
              <v-icon v-else :title="$t('general.muted')"
                >mdi-microphone-off</v-icon
              >
            </v-col>
            <v-col cols="1">
              <v-icon
                :title="$t('general.screensharing')"
                v-if="participant.screensharing"
                color="green"
                >mdi-laptop</v-icon
              >
              <v-icon :title="$t('general.notScreensharing')" v-else
                >mdi-laptop</v-icon
              >
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn
                @click="toggleOpened()"
                :title="$t('general.done')"
                v-if="opened"
                elevation="0"
                >{{ $t("general.done") }}</v-btn
              >
              <v-btn
                @click="toggleOpened()"
                icon
                v-if="!opened"
                :title="$t('general.more')"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div v-if="opened">
            <v-row>
              <v-col>
                <v-select
                  :items="subconferences"
                  v-model="selectedSubconference"
                  :label="
                    $t(
                      'sidebar.participants.participantControl.changeSubconference'
                    )
                  "
                  prepend-icon="mdi-exit-to-app"
                  item-text="displayName"
                  return-object
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="control-buttons participant-control-buttons">
              <v-col cols="6">
                <v-btn
                  elevation="0"
                  v-if="participant.videoStatus === 'unmuted'"
                >
                  <v-icon>mdi-video</v-icon>
                  {{ $t("sidebar.participants.participantControl.stopVideo") }}
                </v-btn>
                <v-btn v-else elevation="0"
                  ><v-icon>mdi-video-off</v-icon
                  >{{
                    $t("sidebar.participants.participantControl.startVideo")
                  }}</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn elevation="0">
                  <v-icon>mdi-shield-star-outline</v-icon>
                  {{ $t("sidebar.participants.participantControl.makeHost") }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  elevation="0"
                  v-if="participant.audioStatus === 'unmuted'"
                >
                  <v-icon>mdi-microphone</v-icon>
                  {{ $t("sidebar.participants.participantControl.mute") }}
                </v-btn>
                <v-btn v-else elevation="0">
                  <v-icon>mdi-microphone-off</v-icon>
                  {{ $t("sidebar.participants.participantControl.unmute") }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  class="text-black"
                  elevation="0"
                  v-if="participant.collaborationEnabled"
                >
                  <v-icon>mdi-group</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.enableCollaboration"
                    )
                  }}
                </v-btn>
                <v-btn v-else elevation="0">
                  <v-icon>mdi-group</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.disableCollaboration"
                    )
                  }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn v-if="participant.signatureEnabled" elevation="0">
                  <v-icon>mdi-fountain-pen-tip</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.disableSignature"
                    )
                  }}
                </v-btn>
                <v-btn v-else elevation="0">
                  <v-icon> mdi-fountain-pen-tip </v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.enableSignature"
                    )
                  }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn elevation="0" v-if="participant.fileShareEnabled">
                  <v-icon>mdi-file-multiple</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.disableDocuments"
                    )
                  }}
                </v-btn>
                <v-btn elevation="0" v-else>
                  <v-icon>mdi-file-multiple</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.enableDocuments"
                    )
                  }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn elevation="0">
                  <v-icon>mdi-message</v-icon>
                  {{ $t("sidebar.participants.participantControl.chat") }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn v-if="participant.chatEnabled" elevation="0">
                  <v-icon>mdi-message</v-icon>
                  {{
                    $t("sidebar.participants.participantControl.disableChat")
                  }}
                </v-btn>
                <v-btn v-else elevation="0">
                  <v-icon>mdi-message-off</v-icon>
                  {{ $t("sidebar.participants.participantControl.enableChat") }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn v-if="participant.screenshareEnabled" elevation="0">
                  <v-icon>mdi-laptop</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.disableScreenshare"
                    )
                  }}
                </v-btn>
                <v-btn v-else elevation="0">
                  <v-icon>mdi-laptop-off</v-icon>
                  {{
                    $t(
                      "sidebar.participants.participantControl.enableScreenshare"
                    )
                  }}
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn elevation="0">
                  <v-icon>mdi-close-circle</v-icon>
                  {{ $t("sidebar.participants.participantControl.remove") }}
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class ParticipantControl extends Vue {
  @Prop()
  participant: Participant | undefined;

  selectedSubconference: SubConference = this.getSelectedSubconference();

  opened = false;
  toggleOpened(): void {
    this.opened = !this.opened;
  }

  get subconferences(): SubConference[] {
    return this.$store.getters["SubconferenceModule/getAsList"];
  }

  getSelectedSubconference(): SubConference {
    return this.$store.getters["SubconferenceModule/getById"](
      this.participant!.subconferenceId
    );
  }
}
</script>
<style lang="scss" scoped>
.card-text {
  color: black !important;
}
.card-title {
  font-size: 1rem;
}
.control-buttons {
  font-size: 0.75rem;
}
</style>
<style lang="scss">
.participant-control-buttons {
  .v-btn {
    font-size: 0.6rem !important;
  }
  i {
    font-size: 1rem !important;
  }
}
</style>
