<template>
  <v-row dense>
    <v-col>
      {{ fieldLabel }}
    </v-col>
    <v-col class="d-flex justify-end">
      <span>{{ switchType.left }}</span>
      <v-switch :input-value="settingsState" class="my-0 py-0 mx-4"> </v-switch>
      <span>{{ switchType.right }}</span>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class SettingsEditSwitch extends Vue {
  @Prop()
  fieldLabel: string | undefined;
  @Prop()
  switchType: any | undefined;
  @Prop()
  settingsState: boolean | undefined;
}
</script>

<style lang="scss" scoped></style>
