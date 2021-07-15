<template>
  <div id="callInSetupMode">
    <v-row v-for="(field, index) in fields" :key="`field-${index}`" dense>
      <v-col cols="4">
        <h4 class="font-weight-regular">
          {{ field.title }}
        </h4>
      </v-col>
      <v-col>
        <h3>{{ field.value }}</h3>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CallInAudioSetup extends Vue {
  fields = [
    {
      title: this.$t("avOptions.audioSetup.callIn.phoneNumber"),
      value: "1-800-555-1212",
    },
    {
      title: this.$t("avOptions.audioSetup.callIn.accessCode"),
      value: "12345",
    },
    {
      title: this.$t("avOptions.audioSetup.callIn.pin"),
      value: "1234",
    },
  ];
}
</script>

<style lang="scss" scoped></style>
