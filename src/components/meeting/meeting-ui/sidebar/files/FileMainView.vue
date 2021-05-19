<template>
  <div id="fileMainView">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex align-center" cols="10">File Select</v-col>
        <v-col cols="2" class="d-flex justify end">
          <v-btn
            @click="uploadFile()"
            fab
            elevation="0"
            color="primary"
            :title="$t('sidebar.files.upload.title')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="document-container">
        <v-col class="px-0 py-0">
          <v-container fluid
            ><v-row>
              <v-col>
                <h4>
                  {{ $t("sidebar.files.mainView.requests") }} ({{
                    numRequests
                  }})
                </h4>
              </v-col>
            </v-row>
            <v-row v-for="request in requests" :key="request.id">
              <v-col>
                <file-share
                  v-if="request.type === 'file'"
                  :fileShare="request"
                ></file-share>
                <signature-share
                  v-if="request.type === 'signature'"
                  :signatureShare="request"
                ></signature-share>
                <collaboration-share
                  v-if="request.type === 'collaboration'"
                  :collaborationShare="request"
                ></collaboration-share>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4>
                  {{ $t("sidebar.files.mainView.myDocuments") }} ({{
                    numDocuments
                  }})
                </h4>
              </v-col>
            </v-row>
            <v-row v-for="document in documents" :key="document.id">
              <v-col>
                <file-share
                  v-if="document.type === 'file'"
                  :fileShare="document"
                ></file-share>
                <signature-share
                  v-if="document.type === 'signature'"
                  :signatureShare="document"
                ></signature-share>
                <collaboration-share
                  v-if="document.type === 'collaboration'"
                  :collaborationShare="document"
                ></collaboration-share
              ></v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4>
                  {{ $t("sidebar.files.mainView.sharedWithMe") }} ({{
                    numShared
                  }})
                </h4>
              </v-col>
            </v-row>
            <v-row v-for="share in shared" :key="share.id">
              <v-col>
                <file-share
                  v-if="share.type === 'file'"
                  :fileShare="share"
                ></file-share>
                <signature-share
                  v-if="share.type === 'signature'"
                  :signatureShare="share"
                ></signature-share>
                <collaboration-share
                  v-if="share.type === 'collaboration'"
                  :collaborationShare="share"
                ></collaboration-share>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Share } from "@/model/meeting/meeting-ui/side-bar/files/file-share";
import { Component, Vue } from "vue-property-decorator";
import CollaborationShare from "./documents/CollaborationShare.vue";
import FileShare from "./documents/FileShare.vue";
import SignatureShare from "./documents/SignatureShare.vue";
@Component({
  components: {
    CollaborationShare,
    FileShare,
    SignatureShare,
  },
})
export default class FileMainView extends Vue {
  uploadFile(): void {
    this.$store.dispatch("FileShareModule/setCreating", { creating: true });
  }

  get requests(): Share[] {
    return this.$store.getters[
      "FileShareModule/getUnOpenedSharesNotBelongingToOwner"
    ](this.$store.state.ParticipantsModule.me.id);
  }

  get documents(): Share[] {
    return this.$store.getters["FileShareModule/getSharesBelongingToOwner"](
      this.$store.state.ParticipantsModule.me.id
    );
  }

  get shared(): Share[] {
    return this.$store.getters[
      "FileShareModule/getOpenedSharesNotBelongingToOwner"
    ](this.$store.state.ParticipantsModule.me.id);
  }
  get numRequests(): number {
    return this.requests.length;
  }

  get numDocuments(): number {
    return this.documents.length;
  }

  get numShared(): number {
    return this.shared.length;
  }
}
</script>
<style lang="scss" scoped>
.document-container {
  max-height: 70vh;
  overflow-y: auto;
}
</style>
<style lang="scss">
.document-title {
  font-size: 1rem;
}
.document-text {
  color: black !important;
}
.document-type {
  font-size: 0.75rem;
}
.document-name {
  font-size: 1rem;
}
</style>