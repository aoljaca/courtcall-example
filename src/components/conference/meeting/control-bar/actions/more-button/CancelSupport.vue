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
            <h5 class="text-center">
              {{
                $t(
                  "conference.meeting.controlBar.more.getSupport.cancelRequestHeader"
                )
              }}
            </h5>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="auto">
            <template>
              <v-btn
                class="text-capitalize pa-6 rounded-lg mr-3"
                depressed
                @click="onCancelSupportRequest()"
              >
                {{
                  $t(
                    "conference.meeting.controlBar.more.getSupport.cancelRequestYes"
                  )
                }}
              </v-btn>
              <v-btn
                class="text-capitalize pa-6 rounded-lg ml-3"
                depressed
                @click="onClosedDialog()"
              >
                {{
                  $t(
                    "conference.meeting.controlBar.more.getSupport.cancelRequestNo"
                  )
                }}
              </v-btn>
            </template>
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
  dialogOpen = true;
  onInputChange(isOpen: boolean): void {
    if (!isOpen) {
      this.$emit("closedDialog");
    }
  }
  onClosedDialog(): void {
    this.$emit("closedDialog");
  }
  onCancelSupportRequest(): void {
    this.$store.dispatch("ConferenceModule/cancelSupportRequest");
    this.$emit("closedDialog");
    this.$emit("cancelSupportRequest");
  }
}
</script>
