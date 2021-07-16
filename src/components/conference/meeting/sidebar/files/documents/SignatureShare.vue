<template>
  <div id="signatureShare">
    <v-card>
      <v-card-title class="signature-header-row py-0">
        <v-container fluid>
          <v-row>
            <v-col cols="6" class="px-0 py-0">
              <span class="document-type">{{
                $t("sidebar.files.signatureShare.title")
              }}</span>
            </v-col>
            <v-col cols="6" class="px-0 py-0 d-flex justify-end">
              <span class="document-type"
                >{{ signedRatio }}
                {{ $t("sidebar.files.signatureShare.signed") }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-text class="document-text px-0 py-0">
        <v-container fluid>
          <v-row class="document-name">
            <v-col class="d-flex align-center">
              <v-icon>mdi-file</v-icon>
              <span class="font-weight-bold">{{
                signatureShare.fileName
              }}</span>
            </v-col>
            <v-col class="font-weight-bold d-flex justify-end align-center">
              {{ $t("sidebar.files.signatureShare.sharedBy") }}: {{ owner }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>{{ participantList }}</v-col>
          </v-row>
          <v-row>
            <v-col v-if="isOwner">
              <v-btn @click="edit()" elevation="0">{{
                $t("general.edit")
              }}</v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn elevation="0">{{
                $t("sidebar.files.signatureShare.reviewAndSign")
              }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { SignatureShare } from "@/model/meeting/meeting-ui/side-bar/files/file-share";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import ShareFormatService from "@/services/share-format";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class SignatureShareComponent extends Vue {
  @Prop()
  signatureShare: SignatureShare | undefined;

  get participants(): { [key: string]: Participant } {
    return this.$store.state.ParticipantsModule.participants;
  }

  get owner(): string {
    const owner: Participant = this.participants[this.signatureShare!.ownerId];
    if (owner) {
      return owner.name;
    } else {
      return "Unknown";
    }
  }

  get signedRatio(): string {
    return `${this.signatureShare?.signed.length}/${this.signatureShare?.participants.length}`;
  }

  get participantList(): string {
    return ShareFormatService.formatParticipants({
      participantIds: this.signatureShare!.participants,
      ownerId: this.signatureShare!.ownerId,
      participants: this.participants!,
    }) as string;
  }

  edit(): void {
    this.$store.dispatch(
      "FileShareModule/setSelectedShare",
      this.signatureShare
    );
    this.$store.dispatch("FileShareModule/setEditing", true);
  }
  get isOwner(): boolean {
    const me: Participant = this.$store.state.ParticipantsModule.me;
    return me.id === this.signatureShare?.ownerId;
  }
}
</script>
<style lang="scss" scoped>
.signature-header-row {
  background-color: lightgray;
}
</style>
