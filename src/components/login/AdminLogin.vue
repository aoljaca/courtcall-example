<template>
  <v-card rounded class="pa-16 text-left">
    <h1 class="font-weight-bold text-center c-primary mb-8">
      {{ $t("login.admin.title") }}
    </h1>
    <v-row dense>
      <v-col>
        <v-text-field :label="$t('login.admin.username')" dense />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-text-field
          :label="$t('login.admin.password')"
          dense
          hide-details
          type="password"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col md="6">
        <v-checkbox color="primary" class="c-primary" :label="$t(`login.admin.rememberUsernameLabel`)" />
      </v-col>
      <v-col md="6" align-self="center" class="text-end">
        <router-link class="text-decoration-none c-accent" to="/">{{ $t("login.admin.forgotPassword") }}</router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn color="accent" @click="onLogin" large>{{
          $t("login.admin.login")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";

@Component
export default class AdminLogin extends Vue {
  onLogin(): void {
    // Authenticate

    this.$router.push({
      name: "Admin",
    });
  }
}
</script>

<style lang="scss" scoped></style>
