<template>
  <v-card light class="text-center ma-10 px-15 py-10 c-primary">
    <h2>{{ $t("avOptions.allowUseHeader") }}</h2>
    <v-row justify="center">
      <v-col cols="8">
        {{ $t("avOptions.allowUseDescription") }}
      </v-col>
    </v-row>

    <br />

    <v-btn color="accent" @click="onConfirm" class="mb-15">{{
      $t("avOptions.okay")
    }}</v-btn>

    <br />

    <span>
      {{ $t("avOptions.assistance.text1") }}
      <a
        :href="`tel:${$t('avOptions.assistance.phone')}`"
        v-text="$t('avOptions.assistance.phone')"
        class="c-accent"
      />
      {{ $t("avOptions.assistance.text2") }}
      <a
        :href="`mailto:${$t('avOptions.assistance.email')}`"
        v-text="$t('avOptions.assistance.email')"
        class="c-accent"
      />
      <span class="mr-1">{{ $t("avOptions.assistance.text3") }}</span>
    </span>
  </v-card>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RequestPermissionsCard extends Vue {
  onConfirm(): void {
    this.$emit("permissionsConfirmed");
  }
}
</script>

<style lang="scss" scoped></style>
