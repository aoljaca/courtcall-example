<template>
  <div class="d-flex flex-column justify-space-between bc-secondary">
    <v-row justify="center">
      <v-col sm="6" md="5" lg="4" class="text-right" align-self="center">
        <div v-if="showLoading" class="text-center">
          <v-progress-circular
            size="150"
            width="4"
            color="primary"
            class="c-primary"
            indeterminate
          >
            {{ $t("general.loading") }}
          </v-progress-circular>
        </div>
        <v-card
          v-if="showPasscodePrompt || showNamePrompt"
          class="pa-16 text-center"
        >
          <room-passcode v-if="showPasscodePrompt" />
          <room-user-name v-if="showNamePrompt" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { EntryMode } from "@/store/entry/entry-module";
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
import RoomPasscode from "./RoomPasscode.vue";
import RoomUserName from "./RoomUserName.vue";

@Component({
  components: {
    RoomPasscode,
    RoomUserName,
  },
})
export default class RoomEntry extends Vue {
  get showLoading(): boolean {
    return this.entryPhase === EntryMode.LOADING;
  }

  get showPasscodePrompt(): boolean {
    return this.entryPhase === EntryMode.PASSCODE;
  }

  get showNamePrompt(): boolean {
    return this.entryPhase === EntryMode.NAME;
  }

  get entryPhase(): EntryMode {
    return this.$store.state.EntryModule.phase;
  }

  mounted(): void {
    const defaultPhase = EntryMode.PASSCODE;

    //if (room.hasPasscode) {
    // defaultPhase = EntryMode.PASSCODE;
    //}

    this.$store.dispatch("EntryModule/alterEntryPhase", defaultPhase);
  }
}
</script>
