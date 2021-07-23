<template>
  <v-card rounded flat class="pa-16 text-left">
    <h1 class="font-weight-bold text-center c-primary mb-4">
      {{ $t("login.admin.title") }}
    </h1>
    <v-card
      v-if="showInvalidCredentialAlert"
      dark
      color="error"
      class="pa-2 mb-3"
    >
      <v-icon dark class="mb-1 mr-2">mdi-alert-circle-outline</v-icon>
      {{ $t("login.admin.invalidCredentials") }}
    </v-card>
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
      <v-col cols="auto">
        <v-checkbox
          color="primary"
          class="c-primary"
          :label="$t(`login.admin.rememberUsernameLabel`)"
        />
      </v-col>
      <v-col align-self="center" class="text-end">
        <router-link class="text-decoration-none c-accent" to="/">{{
          $t("login.admin.forgotPassword")
        }}</router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <!-- Use @click event once authentication is implemented -->
        <!-- <v-btn color="accent" @click="onLogin" large>{{ -->
        <v-btn color="accent" :to="{ name: 'Admin' }" large>{{
          $t("login.admin.login")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdminLogin extends Vue {
  showInvalidCredentialAlert = false;

  onLogin(): void {
    // Authenticate
    const validCredentials = false;

    if (!validCredentials) {
      this.showInvalidCredentialAlert = true;
    } else {
      this.$router.push({
        name: "Admin",
      });
    }
  }
}
</script>

<style lang="scss" scoped></style>
