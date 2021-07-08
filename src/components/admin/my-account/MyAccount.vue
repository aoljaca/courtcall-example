<template>
  <v-container fluid>
    <v-row class="mt-8">
      <v-col>
        <v-form class="ml-8">
          <v-row class="mb-2">
            <v-col cols="auto">
              <span class="font-weight-regular text-h5">Frank Voci</span>
            </v-col>
            <v-spacer />
            <v-col cols="auto">
              <v-btn dark tile depressed class="mr-4" color="grey lighten-1">
                {{ $t("admin.myAccount.cancel") }}
              </v-btn>
              <v-btn
                tile
                depressed
                color="grey darken-3"
                class="white--text"
                :disabled="!hasUnsavedChanges"
              >
                {{ $t("admin.myAccount.save") }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{ $t("admin.myAccount.fields.email.title") }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="email"
                readonly
                dense
                :placeholder="$t('admin.myAccount.fields.email.placeholder')"
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{ $t("admin.myAccount.fields.phone.title") }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="phone"
                dense
                :placeholder="$t('admin.myAccount.fields.phone.placeholder')"
              />
            </v-col>
          </v-row>
          <v-row class="mt-4 mb-4">
            <v-col>
              <span class="font-weight-bold">{{
                $t("admin.myAccount.changePassword")
              }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{ $t("admin.myAccount.fields.password.title") }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="password"
                dense
                :placeholder="$t('admin.myAccount.fields.password.placeholder')"
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{
                $t("admin.myAccount.fields.newPassword.title")
              }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="password"
                dense
                :placeholder="
                  $t('admin.myAccount.fields.newPassword.placeholder')
                "
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="1">
              <label>{{
                $t("admin.myAccount.fields.confirmPassword.title")
              }}</label>
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="password"
                dense
                :placeholder="
                  $t('admin.myAccount.fields.confirmPassword.placeholder')
                "
              />
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class MyAccount extends Vue {
  email = this.$store.state.ParticipantsModule.me.email;
  phone = this.$store.state.ParticipantsModule.me.phone;

  get hasUnsavedChanges(): boolean {
    // TODO: implement save functionality and leverage here
    return false;
  }
}
</script>

<style lang="scss" scoped>
label {
  white-space: nowrap;
}
form {
  .col-1 {
    margin-right: 2rem;
  }
}
</style>
