<template>
  <div id="callInSetupMode">
    <v-container fluid>
      <v-row>
        <v-col>
          <span class="d-block font-weight-bold">
            {{ $t("avOptions.audioSetup.callInSetup.phoneNumber") }}
          </span>
          <span class="d-block">1-800-555-1212</span>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <span class="d-block font-weight-bold">
                  {{$t('avOptions.audioSetup.callInSetup.accessCode')}}
              </span>
              <span class="d-block">
                  12345
              </span>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <span class="d-block font-weight-bold">
                  {{$t('avOptions.audioSetup.callInSetup.pin')}}
              </span>
              <span class="d-block font-weight-bold">
                  12345
              </span>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CallInAudioSetup extends Vue {}
</script>

<style lang="scss" scoped></style>
