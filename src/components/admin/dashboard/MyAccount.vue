<template>
  <div class="my-account">
    <v-container>
      <v-row>
        <v-col> Welcome Back Frank </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class MyAccount extends Vue {}
</script>

<style lang="scss" scoped></style>
