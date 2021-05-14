<template>
  <v-container fluid>
    <v-row class="end-row py-4">
      <v-col class="ml-16">
        <h2>{{ $t("admin.systemUser.header") }}</h2>
      </v-col>
    </v-row>
    <v-form class="ml-16">
      <v-row class="mt-16">
        <v-col cols="6">
          <h1>Frank Voci</h1>
        </v-col>
        <v-col cols="6">
          <v-row class="justify-end mr-16">
            <v-col cols="2">
              <v-btn>{{ $t("admin.systemUser.cancel") }}</v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn>{{ $t("admin.systemUser.save") }}</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-6" cols="2">
          <label>{{ $t("admin.systemUser.email") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-6" cols="2">
          <label>{{ $t("admin.systemUser.phone") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>{{ $t("admin.systemUser.changePassword") }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-6" cols="2">
          <label>{{ $t("admin.systemUser.password") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-6" cols="2">
          <label>{{ $t("admin.systemUser.changePassword") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-6" cols="2">
          <label>{{ $t("admin.systemUser.newPassword") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field>
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import MyAccount from "@/components/admin/dashboard/MyAccount.vue";
import "reflect-metadata";
@Component({
  components: {
    Navigation,
    MyAccount,
  },
})
export default class SystemUserEdit extends Vue {}
</script>

<style lang="scss" scoped>
.end-row {
  border-bottom: 1px solid gray;
}

.justify-content-right {
  justify-content: right;
}

.button-margin {
  margin: 1rem;
}
</style>
