<template>
  <div>
    <v-row dense>
      <v-col class="text-center">
        <v-btn
          color="white"
          icon
          dark
          x-large
          depressed
          @click="onExitCall"
          class="pa-5 bc-error"
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
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ExitButton extends Vue {
  async onExitCall(): Promise<void> {
    // Placeholder
  }
}
</script>

<style lang="scss" scoped></style>
