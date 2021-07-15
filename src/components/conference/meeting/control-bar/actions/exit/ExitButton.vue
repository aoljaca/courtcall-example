<template>
  <div>
    <v-row dense>
      <v-col class="text-center">
        <v-btn
          color="error"
          fab
          depressed
          dark
          @click="onExitCall"
          class="pa-5"
        >
          <v-icon> mdi-close </v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">
          {{ $t("conference.meeting.controlBar.exit") }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ExitButton extends Vue {
  async onExitCall(): Promise<void> {
    // Placeholder
  }
}
</script>

<style lang="scss" scoped></style>
