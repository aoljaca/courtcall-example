<template>
  <div dense class="bc-secondary flex-row d-flex justify-space-between px-15 pb-5">
    <span class="text-left">
      {{ $t("navigation.footer.copyright1") }}
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
export default class ConferenceFooter extends Vue {}
</script>
