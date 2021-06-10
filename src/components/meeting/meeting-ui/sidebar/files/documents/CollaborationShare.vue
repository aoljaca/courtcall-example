<template>
  <div id="collaborationShare">
    <v-card>
      <v-card-title class="collaboration-header-row py-0">
        <span class="document-type">{{
          $t("sidebar.files.collaborationShare.title")
        }}</span>
      </v-card-title>
      <v-card-text class="document-text px-0 py-0">
        <v-container fluid>
          <v-row class="document-name">
            <v-col class="d-flex align-center">
              <v-icon>mdi-file</v-icon>
              <span class="font-weight-bold">{{
                collaborationShare.fileName
              }}</span>
            </v-col>
            <v-col class="font-weight-bold d-flex justify-end align-center">
              {{ $t("sidebar.files.collaborationShare.sharedBy") }}: {{ owner }}
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
                $t("sidebar.files.collaborationShare.openCollaboration")
              }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { CollaborationShare } from "@/model/meeting/meeting-ui/side-bar/files/file-share";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { ShareFormatService } from "@/services/share-format";
import { inject } from "inversify-props";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class CollaborationShareComponent extends Vue {
  @Prop()
  collaborationShare: CollaborationShare | undefined;

  @inject(INJECTION_TYPES.SHARE_FORMAT)
  shareFormatService: ShareFormatService | undefined;

  get participants(): { [key: string]: Participant } {
    return this.$store.state.ParticipantsModule.participants;
  }

  get isOwner() {
    const me: Participant = this.$store.state.ParticipantsModule.me;
    return me.id === this.collaborationShare?.ownerId;
  }

  edit(): void {
    this.$store.dispatch(
      "FileShareModule/setSelectedShare",
      this.collaborationShare
    );
    this.$store.dispatch("FileShareModule/setEditing", true);
  }

  get owner(): string {
    const owner: Participant =
      this.participants[this.collaborationShare!.ownerId];
    if (owner) {
      return owner.name;
    } else {
      return "Unknown";
    }
  }

  get participantList(): string {
    return this.shareFormatService?.formatParticipants({
      participantIds: this.collaborationShare!.participants,
      ownerId: this.collaborationShare!.ownerId,
      participants: this.participants!,
    }) as string;
  }
}
</script>
<style lang="scss" scoped>
.collaboration-header-row {
  background-color: lightgray;
}
</style>
