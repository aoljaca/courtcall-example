<template>
  <div dense class="flex-row d-flex justify-space-between px-15 pb-5">
    <span class="text-left">
      {{ $t("navigation.footer.copyright1", { years: copyrightYears }) }}
      <br />
      {{ $t("navigation.footer.copyright2") }}
    </span>
    <span class="text-right">
      {{ $t("navigation.footer.address") }}
      <br />
      <a :href="$t(`navigation.footer.termsOfUse.url`)">{{
        $t("navigation.footer.termsOfUse.text")
      }}</a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ConferenceFooter extends Vue {
  get copyrightYears(): string {
    const currentYear = new Date().getFullYear();
    const yearCreated = "2021";
    const combined = `${yearCreated}-${currentYear}`;
    return `${yearCreated !== currentYear.toString() ? combined : yearCreated}`;
  }
}
</script>
