<template>
  <v-dialog
    v-model="dialogOpen"
    @input="onInputChange"
    max-width="650"
    class="rounded"
  >
    <v-card>
      <v-container class="d-flex flex-column py-15">
        <v-row class="justify-center">
          <v-col cols="auto">
            <h2>
              {{ $t("conference.meeting.controlBar.more.getSupport.header") }}
            </h2>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="8">
            <v-text-field
              :placeholder="
                $t('conference.meeting.controlBar.more.getSupport.placeholder')
              "
              counter="300"
              class="mt-n3"
              v-model="requestSupportInput"
              v-if="!sentSupportRequest"
              :rules="rules"
              maxlength="300"
            >
            </v-text-field>
            <h5 v-if="sentSupportRequest">
              {{
                $t(
                  "conference.meeting.controlBar.more.getSupport.requestUpdate"
                )
              }}
            </h5>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="auto">
            <template v-if="!sentSupportRequest">
              <v-btn
                class="mr-5 text-capitalize pa-6 rounded-lg"
                depressed
                @click="onSendRequest()"
                color="accent"
                :disabled="!requestSupportInput"
                >{{
                  $t(
                    "conference.meeting.controlBar.more.getSupport.sendSupport"
                  )
                }}
              </v-btn>
              <v-btn
                class="text-capitalize pa-6 rounded-lg"
                color="info black--text"
                depressed
                @click="onClosedDialog()"
              >
                {{
                  $t("conference.meeting.controlBar.more.getSupport.cancel")
                }}</v-btn
              >
            </template>
            <v-btn
              class="text-capitalize pa-6 rounded-lg"
              color="info black--text"
              depressed
              @click="onClosedDialog()"
              v-if="sentSupportRequest"
            >
              {{ $t("conference.meeting.controlBar.more.getSupport.dismiss") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class GetSupport extends Vue {
  requestSupportInput = null;
  sentSupportRequest = false;
  sentRequestCancel = false;
  supportObject = {};
  dialogOpen = true;
  rules = [
    (value: string): any => (value || "").length <= 300 || "Max 300 characters",
  ];
  onInputChange(isOpen: boolean): void {
    if (!isOpen) {
      this.$emit("closedDialog");
    }
  }
  onSendRequest(): void {
    this.$store.dispatch(
      "ConferenceModule/createSupportRequest",
      this.requestSupportInput
    );
    this.sentSupportRequest = true;
  }
  onClosedDialog(): void {
    this.$emit("closedDialog");
  }
  onCancelSupportRequest(): void {
    this.$store.dispatch("ConferenceModule/cancelSupportRequest");
    this.$emit("closedDialog");
  }
}
</script>
