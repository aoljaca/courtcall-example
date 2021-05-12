<template>
  <div class="rooms-table">
    <v-container>
      <v-row>
        <v-col>
          <h2>{{ $t("admin.dashboard.rooms") }}</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class Rooms extends Vue {}
</script>

<style lang="scss" scoped></style>
