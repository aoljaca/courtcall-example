<template>
  <div id="fileUpload">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-file-input
            :title="$t('sidebar.files.upload.chooseFile')"
            :label="$t('sidebar.files.upload.chooseFile')"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><label for="share-type-select" class="font-weight-bold">
            {{ $t("sidebar.files.upload.uploadAs") }}</label
          >
          <v-select
            v-model="selectedFileShare"
            :items="possibleFileShareTypes"
            return-object
            id="share-type-select"
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
  FileShareWithSelecType,
  SELECT_TYPES,
} from "@/model/meeting/meeting-ui/side-bar/files/participant-select-type";
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { CaseFormatService } from "@/services/case-format";
@Component({})
export default class FileUpload extends Vue {
  @inject(INJECTION_TYPES.CASE_FORMAT)
  caseFormatService: CaseFormatService | undefined;

  selectedFileType: FileShareType | null = null;

  possibleFileShareTypes = FILE_SHARE_TYPES;

  possibleSelectTypes: FileShareWithSelecType[] = SELECT_TYPES;

  selectedSelectType: FileShareWithSelecType | null = null;

  formatFileShareTypeLabel(type: FileShareType): any {
    return this.$t(type.label);
  }

  selectedParticipants: Participant[] = [];

  selectedCases: Case[] = [];

  formatSelectTypeLabel(selectType: FileShareWithSelecType): any {
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
  }

  formatCase(c: Case) {
    return this.caseFormatService?.formatCase(c);
  }
}
</script>