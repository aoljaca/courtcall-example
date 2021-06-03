<template>
  <div class="admin-nav">
    <v-container>
      <v-row class="justify-content-center">
        <v-col cols="3">
          <router-link to="/admin/dashboard">Dashboard</router-link>
        </v-col>
        <v-col cols="3">
          <router-link to="/admin/organizations">{{
            $t("admin.organizations.title")
          }}</router-link>
        </v-col>
        <v-col cols="3">
          <router-link to="/admin/system-users">System Users</router-link>
        </v-col>
        <v-col cols="3">
          <router-link to="/admin/support/active">{{
            $t("admin.support.description")
          }}</router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class Navigation extends Vue {}
</script>

<style lang="scss" scoped></style>
