<template>
  <v-btn icon v-clipboard:copy="dataToCopy" v-clipboard:success="onCopy">
    <v-icon>mdi-content-copy</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class CopyToClipboardButton extends Vue {
  @Prop()
  dataToCopy!: string;

  onCopy(): void {
    this.$toast.info(this.$t("admin.participants.copySuccess"));
  }
}
</script>
