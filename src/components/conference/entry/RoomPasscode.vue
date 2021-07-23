<template>
  <div class="text-center">
    <h2>{{ $t("entry.passcode.title") }}</h2>
    <v-text-field
      v-model="passcode"
      :title="$t('entry.passcode.placeholder')"
      :placeholder="$t('entry.passcode.placeholder')"
    />
    <v-btn :title="$t('general.submit')" @click="onSubmit" color="accent">{{
      $t("general.submit")
    }}</v-btn>
    <v-btn
      :title="$t('general.exit')"
      @click="onExit"
      color="secondary"
      class="ml-4 c-primary"
      >{{ $t("general.exit") }}
    </v-btn>
  </div>
</template>
<script lang="ts">
import { EntryMode } from "@/store/entry/entry-module";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class RoomPasscode extends Vue {
  passcode = "";

  onSubmit(): void {
    this.$store.dispatch("EntryModule/alterEntryPhase", EntryMode.NAME);
  }

  onExit(): void {
    this.$router.push({
      name: "Login",
    });
  }
}
</script>
