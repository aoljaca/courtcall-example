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
              v-model="input"
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
            <v-btn
              class="mr-5 text-capitalize pa-6 rounded-lg"
              depressed
              @click="sendRequest()"
              color="accent"
              :disabled="input == null || input == '' ? true : false"
              v-if="!sentRequest"
              >{{
                $t("conference.meeting.controlBar.more.getSupport.sendSupport")
              }}
            </v-btn>
            <v-btn
              class="text-capitalize pa-6 rounded-lg"
              color="info black--text"
              depressed
              @click="onDismissOrClear"
              v-if="!sentRequest"
            >
              {{
                $t("conference.meeting.controlBar.more.getSupport.cancel")
              }}</v-btn
            >
            <v-btn
              class="text-capitalize pa-6 rounded-lg"
              color="info black--text"
              depressed
              @click="onDismissOrClear"
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
  @Prop() input!: any;
  @Prop() sentRequest!: boolean;
  sendRequest(): void {
    this.$emit("sendRequest");
  }
  onDismissOrClear(): void {
    this.$emit("changeVModel");
  }
}
// When you create a new branch what code does it create the
// new branch from? Because I have the latest code from my other
// branch even though it was not merged into env/dev

// When you click on a get support the more menu should close
// Does the 0/300 text need to have the text like in the figma
// Does placeholder need to be aligned left?

// Cancel and dismiss button has to change property in file that is not this one

// Do we want to be able to send multiple requests?

// What is the difference between calling the function @click and not
</script>
