<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="black--text"
        depressed
        data-test-id="contact-host-button"
      >
        {{ $t("waitingRoom.contactHost") }}
      </v-btn>
    </template>

    <v-card v-if="!messagedHost" class="pa-14">
      <v-card-title class="text-h5 d-flex justify-center">
        <h3>
          {{ $t("waitingRoom.messageHost") }}
        </h3>
      </v-card-title>

      <v-text-field
        v-model="messageContent"
        data-test-id="contact-host-text"
        clearable
        class="mb-4"
      >
      </v-text-field>

      <v-card-actions class="d-flex justify-center">
        <v-btn
          depressed
          data-test-id="contact-host-submit"
          class="pa-6"
          color="accent white--text"
          @click="transition()"
        >
          {{ $t("waitingRoom.submit") }}
        </v-btn>
        <v-btn
          class="mx-8 pa-6"
          depressed
          data-test-id="contact-host-cancel"
          color="info black--text"
          @click="onCancelMessage()"
        >
          {{ $t("waitingRoom.cancel") }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="messagedHost" class="pa-14">
      <v-card-title class="text-h5 d-flex justify-center">
        <h3>
          {{ $t("waitingRoom.standby") }}
        </h3>
      </v-card-title>

      <v-card-actions class="d-flex justify-center">
        <v-btn
          color="black--text"
          depressed
          data-test-id="dismiss-button"
          @click="onDismissal()"
        >
          <span>
            {{ $t("waitingRoom.dismiss", { dismissTime: timeToDismiss }) }}
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ContactHost extends Vue {
  dialog = false;
  messagedHost = false;
  messageContent = "";
  isLastScreen = false;
  timeToDismiss = 10;
  timer = 0;

  transition(): void {
    this.messagedHost = true;
    this.isLastScreen = true;
    this.startTimer();
  }

  startTimer(): void {
    this.timer = setInterval(this.setTimeToDismiss, 1000);
  }

  setTimeToDismiss(): void {
    console.log("test");
    if (this.timeToDismiss === 0) {
      this.onDismissal();
    } else {
      this.timeToDismiss--;
    }
  }

  onDismissal(): void {
    this.timeToDismiss = 10;
    this.messageContent = "";
    this.dialog = false;
    this.messagedHost = false;
    this.isLastScreen = false;
    clearInterval(this.timer);
  }

  onCancelMessage(): void {
    this.messageContent = "";
    this.dialog = false;
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: underline;
}
.m-l-25 {
  margin-left: 25%;
}
.m-r-25 {
  margin-right: 25%;
}
h3 {
  white-space: nowrap;
}
</style>
