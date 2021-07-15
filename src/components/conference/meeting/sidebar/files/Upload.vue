<template>
  <div id="fileUpload">
    <v-container fluid>
      <v-row v-if="!editing">
        <v-col>
          <v-file-input
            :title="$t('sidebar.files.upload.chooseFile')"
            :label="$t('sidebar.files.upload.chooseFile')"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row v-if="editing">
        <v-col>{{ fileName }}</v-col>
      </v-row>
      <v-row>
        <v-col
          ><label for="share-type-select" class="font-weight-bold">
            {{ $t("sidebar.files.upload.uploadAs") }}</label
          >
          <v-select
            v-model="selectedFileType"
            :items="possibleFileShareTypes"
            return-object
            id="share-type-select"
            :readonly="editing"
            :item-text="formatFileShareTypeLabel"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label for="share-users-select" class="font-weight-bold">
            {{ $t("sidebar.files.upload.shareWith") }}
          </label>
          <v-select
            v-model="selectedSelectType"
            :items="possibleSelectTypes"
            id="share-users-select"
            :item-text="formatSelectTypeLabel"
            return-object
          ></v-select>
        </v-col>
      </v-row>
      <v-row v-if="selectType === 'selectedCases'">
        <v-col
          ><v-select
            v-model="selectedCases"
            :items="possibleCases"
            :item-text="formatCase"
            multiple
            chips
            return-object
          ></v-select
        ></v-col>
      </v-row>
      <v-row v-if="selectType === 'selectedParticipants'">
        <v-col>
          <v-select
            v-model="selectedParticipants"
            :items="possibleParticipants"
            item-text="name"
            multiple
            chips
            return-object
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="cancelCreation()" elevation="0">{{
            $t("general.cancel")
          }}</v-btn>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn elevation="0">{{
            $t("sidebar.files.upload.uploadAndShare")
          }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {
  FileShareType,
  FILE_SHARE_TYPES,
} from "@/model/meeting/meeting-ui/side-bar/files/file-share-type";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import {
  FileShareWithSelectType,
  SELECT_TYPES,
} from "@/model/meeting/meeting-ui/side-bar/files/participant-select-type";
import CaseFormatService from "@/services/case-format";
import { Share } from "@/model/meeting/meeting-ui/side-bar/files/file-share";
@Component({})
export default class FileUpload extends Vue {
  selectedFileType: FileShareType | null = this.determineIntialFileType();

  possibleFileShareTypes = FILE_SHARE_TYPES;

  possibleSelectTypes: FileShareWithSelectType[] = SELECT_TYPES;

  selectedSelectType: FileShareWithSelectType | null = SELECT_TYPES[2];

  formatFileShareTypeLabel(type: FileShareType): any {
    return this.$t(type.label);
  }

  get editing() {
    return this.$store.state.FileShareModule.editing;
  }

  get selectedShare(): Share {
    return this.$store.state.FileShareModule.selectedShare;
  }

  determineIntialFileType() {
    const selectedShare: Share = this.$store.state.FileShareModule
      .selectedShare;
    if (selectedShare) {
      const type = selectedShare.type;
      return FILE_SHARE_TYPES.find((t) => t.type === type)!;
    } else {
      return null;
    }
  }
  determineInitialParticipants(): Participant[] {
    const selectedShare = this.$store.state.FileShareModule
      .selectedShare as Share;
    if (!selectedShare) {
      return [];
    } else {
      const participants: { [key: string]: Participant } = this.$store.state
        .ParticipantsModule.participants;
      const self: Participant = this.$store.state.ParticipantsModule.me;
      return selectedShare.participants
        .filter((id) => id !== self.id)
        .map((id) => participants[id])
        .filter((p) => p != null);
    }
  }

  selectedParticipants: Participant[] = this.determineInitialParticipants();

  selectedCases: Case[] = [];

  formatSelectTypeLabel(selectType: FileShareWithSelectType): any {
    const type = selectType.type;
    if (type === "subconference") {
      return this.$store.state.SubconferenceModule.current.displayName;
    } else if (type === "hostsAndModerators") {
      return this.$t("sidebar.files.upload.hostsAndModerators");
    } else if (type === "selectedCases") {
      return this.$t("sidebar.files.upload.selectedCases");
    } else if (type === "selectedParticipants") {
      return this.$t("sidebar.files.upload.selectedParticipants");
    } else {
      return "Unknown";
    }
  }

  get fileName() {
    return this.selectedShare?.fileName;
  }
  get selectType() {
    return this.selectedSelectType?.type;
  }

  get possibleCases(): Case[] {
    return this.$store.getters["CasesModule/getAsList"];
  }

  get possibleParticipants(): Participant[] {
    return this.$store.getters["ParticipantsModule/getAsListNoSelf"];
  }

  cancelCreation() {
    this.$store.dispatch("FileShareModule/setCreating", { creating: false });
    this.$store.dispatch("FileShareModule/setEditing", false);
    this.$store.dispatch("FileShareModule/setSelectedShare", null);
  }

  formatCase(c: Case) {
    return CaseFormatService.formatCase(c);
  }
}
</script>
