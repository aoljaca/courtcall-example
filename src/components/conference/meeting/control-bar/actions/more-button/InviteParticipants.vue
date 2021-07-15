<template>
  <div id="inviteParticipants">
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-select
              v-model="selectedInvitationType"
              :items="possibleInvitationTypes"
              :item-text="invitationTypeLabel"
              return-object
              :label="
                $t(
                  'conference.meeting.controlBar.more.inviteParticipants.selectType'
                )
              "
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row v-if="shouldShowNameEntry()">
          <v-col>
            <v-text-field
              :label="
                $t(
                  'conference.meeting.controlBar.more.inviteParticipants.enterName'
                )
              "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="shouldShowCaseSelection()">
          <v-col>
            <v-select
              v-model="selectedCase"
              :items="possibleCases"
              :item-text="formatCaseLabel"
              return-object
              :label="
                $t(
                  'conference.meeting.controlBar.more.inviteParticipants.selectCase'
                )
              "
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="link">
          <v-col>
            {{ link }}
          </v-col>
          <v-col cols="2" class="d-flex justify-end">
            <v-btn icon>
              <v-icon @click="copyLink()" :title="$t('general.copy')"
                >mdi-content-copy</v-icon
              >
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="0">{{ $t("general.cancel") }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn @click="generateLink()" elevation="0">{{
              $t(
                "conference.meeting.controlBar.more.inviteParticipants.generateLink"
              )
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  InviteParticipantType,
  INVITE_PARTICIPANT_TYPES,
} from "@/model/meeting/meeting-ui/control-bar/more/invite-participants/invite-participant-type";
import { Case } from "@/model/meeting/meeting-ui/case";
@Component({})
export default class InviteParticipants extends Vue {
  link: string | null = "";
  selectedInvitationType: InviteParticipantType | null = null;
  selectedCase: Case | null = null;
  possibleInvitationTypes = INVITE_PARTICIPANT_TYPES;
  invitationTypeLabel(type: InviteParticipantType) {
    return this.$t(type.translationText);
  }

  formatCaseLabel(c: Case) {
    return `${c.name} ${c.number}`;
  }

  get linkType() {
    return this.selectedInvitationType?.type;
  }

  get possibleCases() {
    return this.$store.getters["CasesModule/getAsList"];
  }

  generateLink() {
    this.link = "https://courtcall.com";
  }

  copyLink() {
    navigator.clipboard.writeText(this.link!);
  }

  shouldShowNameEntry() {
    return [
      this.linkType === "singleLink",
      this.linkType === "scheduledLink",
    ].some((b) => b === true);
  }

  shouldShowCaseSelection() {
    return this.linkType === "scheduledLink";
  }
}
</script>
