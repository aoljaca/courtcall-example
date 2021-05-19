<template>
  <div class="su-header">
    <v-container>
      <v-row class="py-4">
        <v-col>
          <span 
            class="grey--text text--lighten-1 font-weight-bold text-subtitle-1"
            >{{ $t("admin.systemUser.dashboard") }}</span
          >
          <span 
            class="font-weight-bold"
            >{{ $t(message) }}</span
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class SystemUserHeader extends Vue {
  message = "admin.systemUser.account";
}
</script>

<style lang="scss" scoped>
.su-header {
  border-bottom: 1px solid gray;
}
</style>
