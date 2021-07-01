<template>
  <div class="text-center">
    <h2 class="text-align-center c-primary">{{ $t("entry.name.title") }}</h2>
    <span class="text-align-center c-primary">{{
      $t("entry.name.description")
    }}</span>
    <v-text-field
      v-model="name"
      :title="$t('entry.name.placeholder')"
      :placeholder="$t('entry.name.placeholder')"
    />
    <v-btn :title="$t('general.submit')" @click="onSubmit" color="accent"
      >{{ $t("general.submit") }}
    </v-btn>
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
@Component
export default class RoomUserName extends Vue {
  name = "";

  onSubmit() {
    this.$store.dispatch("EntryModule/alterEntryPhase", EntryMode.LOADING);
  }

  onExit() {
    this.$router.push({
      name: "Login",
    });
  }
}
</script>
