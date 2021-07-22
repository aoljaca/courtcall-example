<template>
  <span id="getSupport">
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
              v-model="requestInput"
              v-if="!sentRequest"
              :rules="rules"
              maxlength="300"
            >
              <!-- <template>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template> -->
            </v-text-field>
            <h5 v-if="sentRequest">
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
            <template v-if="!sentRequest">
              <v-btn
                class="mr-5 text-capitalize pa-6 rounded-lg"
                depressed
                @click="onSendRequest()"
                color="accent"
                :disabled="!requestInput"
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
              v-if="sentRequest"
            >
              {{ $t("conference.meeting.controlBar.more.getSupport.dismiss") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </span>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class GetSupportIcon extends Vue {
  rules = [
    (value: string): any => (value || "").length <= 300 || "Max 300 characters",
  ];
  requestInput = null;
  sentRequest = false;
  destroyed(): void {
    this.requestInput = null;
    setTimeout(() => {
      this.sentRequest = false;
    }, 175);
  }
  // @Prop() requestInput!: any;
  // @Prop() sentRequest!: boolean;
  onSendRequest(): void {
    this.sentRequest = true;
  }
  onClosedDialog(): void {
    this.requestInput = null;
    setTimeout(() => {
      this.sentRequest = false;
    }, 175);
  }
}
// What is the difference between calling the function @click and not

// Avoid mutating a prop directly since the value will be overwritten
// whenever the parent component re-renders. Instead, use a data or
// computed property based on the prop's value. Prop being mutated:
// "input"
</script>
