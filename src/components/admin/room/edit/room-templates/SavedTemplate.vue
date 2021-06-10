<template>
<div>
  <v-row class="px-1 py-4">
    <v-col>
      <div>{{ name }}</div>
    </v-col>
    <v-col class="d-flex justify-end">
      <v-icon> mdi-delete </v-icon>
    </v-col>
  </v-row>
  <v-divider>
  </v-divider>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class RoomTemplate extends Vue {
  dialogm1 = "";
  dialog = false;
  @Prop()
  name: string | undefined;
}
</script>

<style lang="scss" scoped></style>
