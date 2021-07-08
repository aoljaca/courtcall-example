<template>
  <div id="pageNotFound">
    <v-container class="fill d-flex">
      <v-row class="justify-center">
        <v-col align-self="center" cols="12" md="6">
          <v-card class="card-background" depressed>
            <v-container fluid>
              <v-row>
                <v-col class="d-flex justify-center">
                  <h2>404</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3 class="text-center">{{ $t("notFound.title") }}</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="justify-center d-flex">
                  <span class="font-weight-bold">
                    {{ $t("notFound.description") }}
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col></v-row
      >
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component({})
export default class NotFound extends Vue {}
</script>
<style lang="scss" scoped>
.fill {
  height: 100vh;
}
//TODO: Replace with Theme Colour

.card-background.v-card {
  background-color: var(--v-primary-base);
}
</style>
