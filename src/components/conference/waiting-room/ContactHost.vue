<template>
  <v-dialog
    v-model="dialog"
    width="700"
    :close-delay="closeDelay(isLastScreen)"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="black--text"
        depressed
        data-test-id="contact-host-button"
      >
        {{ $t("waitingRoom.contactHost")}}
      </v-btn>
    </template>

    <v-card v-if="!messagedHost" class="pa-14">
      <v-card-title class="text-h5 d-flex justify-center">
        <h3>
          Message the host
        </h3>
      </v-card-title>

      <v-text-field
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
          Submit
        </v-btn>
        <v-btn
          class="mx-8 pa-6"
          depressed
          data-test-id="contact-host-cancel"
          color="info black--text"
          @click="dialog = false"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="messagedHost" class="pa-14">
      <v-card-title class="text-h5 d-flex justify-center">
        <h3>
          The host has been contacted. Please stand by.
        </h3>
      </v-card-title>

      <v-card-actions class="d-flex justify-center">
        <v-btn
          color="black--text"
          depressed
          data-test-id="dismiss-button"
          @click="dialog = false"

        >
          Dismiss(
            <span>15</span>
          )
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ContactHost extends Vue {
  dialog = false;
  messagedHost = false;
  isLastScreen = false;

  transition() {
    this.messagedHost = true;
    this.isLastScreen = true;
  }

  closeDelay(flag : boolean) {
    return flag ? 10000 : undefined;
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
