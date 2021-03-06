<template>
  <div id="fileShare">
    <v-card>
      <v-card-title class="file-header-row py-0"
        ><span class="document-type">{{
          $t("sidebar.files.fileShare.title")
        }}</span></v-card-title
      >
      <v-card-text class="document-text px-0 py-0">
        <v-container fluid>
          <v-row class="document-name">
            <v-col class="d-flex align-center">
              <v-icon>mdi-file</v-icon>
              <span class="font-weight-bold">{{ fileShare.fileName }}</span>
            </v-col>
            <v-col class="font-weight-bold d-flex justify-end align-center">
              {{ $t("sidebar.files.fileShare.sharedBy") }}: {{ owner }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ participantList }}
            </v-col>
          </v-row>
          <v-row>
            <v-col v-if="isOwner">
              <v-btn @click="edit()" elevation="0">{{
                $t("general.edit")
              }}</v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn elevation="0">{{
                $t("sidebar.files.fileShare.download")
              }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { FileShare } from "@/model/meeting/meeting-ui/side-bar/files/file-share";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import ShareFormatService from "@/services/share-format";

import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class FileShareComponent extends Vue {
  @Prop()
  fileShare: FileShare | undefined;

  get participants(): { [key: string]: Participant } {
    return this.$store.state.ParticipantsModule.participants;
  }

  get owner(): string {
    const owner: Participant = this.participants[this.fileShare!.ownerId];
    if (owner) {
      return owner.name;
    } else {
      return "Unknown";
    }
  }

  get participantList(): string {
    return ShareFormatService.formatParticipants({
      participantIds: this.fileShare!.participants,
      ownerId: this.fileShare!.ownerId,
      participants: this.participants!,
    }) as string;
  }

  get isOwner(): boolean {
    const me: Participant = this.$store.state.ParticipantsModule.me;
    return me.id === this.fileShare?.ownerId;
  }

  edit(): void {
    this.$store.dispatch("FileShareModule/setSelectedShare", this.fileShare);
    this.$store.dispatch("FileShareModule/setEditing", true);
  }
}
</script>
<style lang="scss" scoped>
.file-header-row {
  background-color: lightgray;
}
</style>
