<template>
  <div class="search-row">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="3">
          <v-select :items="items" label="Search Type"></v-select>
        </v-col>
        <v-col cols="5">
          <v-text-field
            :label="$t('admin.dashboard.searchTerm')"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class Search extends Vue {
  items = ["System Users", "Participants", "Rooms", "Cases", "Organizations"];
}
</script>

<style lang="scss" scoped></style>
