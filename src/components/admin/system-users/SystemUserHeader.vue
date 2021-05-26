<template>
  <div class="su-header">
    <v-container fluid>
      <v-row class="py-4">
        <v-col class="ml-8">
          <span 
            class="grey--text text--lighten-1 font-weight-bold text-subtitle-1"
            >{{ $t("admin.systemUser.dashboard") }}</span
          >
          <span :message="message"
            class="font-weight-bold"
            >{{ $t(message) }}</span
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class SystemUserHeader extends Vue {
  @Prop()
  message: string | undefined;
}
</script>

<style lang="scss" scoped>
.su-header {
  border-bottom: 1px solid gray;
}
</style>
