<template>
  <div id="pageNotFound">
    <v-container class="fill d-flex align-content-center">
      <v-col cols="12" md="6">
        <v-card class="card-background">
          <v-container fluid>
            <v-row>
              <h2 class="text-center">404</h2>
            </v-row>
            <v-row>
              <v-col>
                <h3 class="text-center">{{ $t("logout.title") }}</h3>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
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
.card-background {
  background-color: var(--v-secondary-base);
}
</style>